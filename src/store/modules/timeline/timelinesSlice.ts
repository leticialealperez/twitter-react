import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '../../store';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export interface ITweet {
  id: string;
  name: string;
  username: string;
  message: string;
  imageUrl: string;
}

const adapter = createEntityAdapter<ITweet>({
  selectId: (tweet) => tweet.id,
});

export const {
  selectAll: selecionaTodosTweets,
  selectById: selecionaTweetById,
} = adapter.getSelectors((state: RootState) => state.timeline);

// aqui pra baixo estarão os métodos assincronos
// createAsyncThunk
// get - listar os registros
export const buscarTodos = createAsyncThunk('tweets/getAll', async () => {
  const resposta = await axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      const novoArray = response.data.map((value: any) => {
        const novoObj = {
          id: `${value.id}`,
          name: 'TechHelper Joinha da Growdev',
          username: '@xaxalautech',
          imageUrl: 'https://avatars.githubusercontent.com/u/71561411?v=4',
          message: value.title,
        };

        return novoObj;
      });

      return novoArray;
    })
    .catch((e) => console.log(e));

  console.log(resposta);
  return resposta;
});

// post - criar
export const criarTweet = createAsyncThunk(
  'tweets/create',
  async (tweet: string) => {
    const response = await axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: tweet,
          body: 'blabla',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => {
        const { title } = JSON.parse(response.data.body);
        console.log(title);
        return {
          id: uuidv4(),
          name: 'TechHelper Joinha da Growdev',
          username: '@xaxalautech',
          imageUrl: 'https://avatars.githubusercontent.com/u/71561411?v=4',
          message: title,
        };
      });
    return response;
  }
);

// delete - deletar

// put - atualizar

const sliceTimeline = createSlice({
  name: 'timeline',
  initialState: adapter.getInitialState({
    loading: false,
    error: '',
  }), // ids = [10, ],  entities = [{ id: 10}, ]

  // e aqui os caras que são executados de forma síncrona
  reducers: {
    adicionarTweet: adapter.addOne,
    deletarTweet: adapter.removeOne,
  },

  // aqui todas as chamadas os casos para as requisições assincronas
  extraReducers(builder) {
    builder.addCase(buscarTodos.pending, (state, action) => {
      state.loading = true;
      console.log('Requisição está pendente...');
    });
    builder.addCase(buscarTodos.fulfilled, (state, action) => {
      state.loading = false;

      action.payload.forEach((element: ITweet) => {
        adapter.addOne(state, element);
      });
    });
    builder.addCase(buscarTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Deu ruim';
    });
    builder.addCase(criarTweet.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(criarTweet.fulfilled, (state, action) => {
      adapter.addOne(state, action.payload);
      state.loading = false;
    });
    builder.addCase(criarTweet.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Deu ruim no Create';
    });
  },
});

export const { adicionarTweet, deletarTweet } = sliceTimeline.actions;
export default sliceTimeline.reducer;
