import {createSlice} from '@reduxjs/toolkit'
import { RootState } from '../../store';

interface ITweet {
    id: string,
    name:string,
    useName: string,
    message: string,
    imageUrl: string
}


interface InitialState {
    id: string,
    name:string,
    useName: string,
    message: string,
    imageUrl: string
    
    
}




const adapter = createEntityAdapter<InitialState>({});

export const { selectAll:selecionaTodosTweets, selectById:selecionaTweetById } = adapter.getSelectors(
  (state: RootState) => state.timeline
);

const sliceTimeline = createSlice({
  name: 'timeline',
  initialState: adapter.getInitialState(),
  reducers: {
    adicionarTweet: adapter.addOne,
    
  },
});

export const { adicionarTweet } = sliceTimeline.actions;
export default sliceTimeline.reducer;
