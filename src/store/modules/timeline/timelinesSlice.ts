import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface ITweet {
  id: string;
  name: string;
  usename: string;
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

const sliceTimeline = createSlice({
  name: 'timeline',
  initialState: adapter.getInitialState(), // ids = [10, ],  entities = [{ id: 10}, ]
  reducers: {
    adicionarTweet: adapter.addOne,
    deletarTweet: adapter.removeOne,
  },
  // aqui vai os extrareducers
});

export const { adicionarTweet, deletarTweet } = sliceTimeline.actions;
export default sliceTimeline.reducer;
