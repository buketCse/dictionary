import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    vocabListName: ''
}

const vocabListSlice = createSlice({
  name: 'vocabLists',
  initialState,
  reducers: {
    setVocabListName: (state, action) => {
      state.vocabListName = action.payload
    }
  }
})

export const {
    setVocabListName
} = vocabListSlice.actions

export const vocabListName = (state) => state.vocabListName

export default vocabListSlice.reducer
