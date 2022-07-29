import { combineReducers } from '@reduxjs/toolkit';

// trazer todos os slices da pasta modules
import timeline from './timeline/timelinesSlice';

// Adicionar aqui as importações dos slices criados
export const rootReducer = combineReducers({
  timeline,
});
