import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: []
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

export const posts = (state) => state.posts

export default vocabListSlice.reducer
