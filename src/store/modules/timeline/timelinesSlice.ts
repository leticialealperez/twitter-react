import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface ITweet {
  id: string;
  name: string;
  useName: string;
  message: string;
  imageUrl: string;
}

const adapter = createEntityAdapter<ITweet>({});

export const {
  selectAll: selecionaTodosTweets,
  selectById: selecionaTweetById,
} = adapter.getSelectors((state: RootState) => state.timeline);

const sliceTimeline = createSlice({
  name: 'timeline',
  initialState: adapter.getInitialState(), // ids = [10, ],  entities = [{ id: 10}, ]
  reducers: {
    adicionarTweet: adapter.addOne,
  },
});

export const { adicionarTweet } = sliceTimeline.actions;
export default sliceTimeline.reducer;
