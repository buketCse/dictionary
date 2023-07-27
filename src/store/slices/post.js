import { createSlice } from '@reduxjs/toolkit'

const initialState={
    languageNames: ''
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setLanguageNames: (state, action) => {
            state.languageNames=action.payload
        }
    }
})

export const {
    setLanguageNames
  } = postSlice.actions 

export const languageNames = (state) => state.languageNames

export default postSlice.reducer
