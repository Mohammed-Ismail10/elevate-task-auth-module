import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedOptions: {}, // يحتوي على { questionId: answerKey }
  userAnswers: {},
};







export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {

    setSelectedOption: (state, { payload }) => {
      const { questionId, answerKey } = payload;
      state.selectedOptions[questionId] = answerKey;
    },
    emptySelectedOption: (state) => {
      state.selectedOptions = {};
    },
    setUserAnswers: (state, { payload }) => {
      state.userAnswers = payload;
      console.log(state.userAnswers);
    }
  },

})



export const answerReducer = answerSlice.reducer;
export const { setSelectedOption, emptySelectedOption, setUserAnswers } = answerSlice.actions;