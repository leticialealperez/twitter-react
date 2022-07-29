import {combineReducers} from "@reduxjs/toolkit"

import timeline from './timeline/timelinesSlice'


export const rootReducer = combineReducers({
    timeline,
})