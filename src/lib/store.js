import { configureStore } from '@reduxjs/toolkit'
import { answerReducer } from './answerSlice.js'

export const store = configureStore({
  reducer: {
    answer: answerReducer,
  },
})