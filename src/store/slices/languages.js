import { createSlice } from '@reduxjs/toolkit'

const initialState={
    languageNames: ''
}

const languagesSlice = createSlice({
    name: 'languages',
    initialState,
    reducers: {
        setLanguageNames: (state, action) => {
            state.languageNames=action.payload
        }
    }
})

export const {
    setLanguageNames
  } = languagesSlice.actions 

export const languageNames = (state) => state.languageNames

export default languagesSlice.reducer
