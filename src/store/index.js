import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
import app from './slices/appSlice'
import vocabLists from './slices/vocabLists'
import languages from './slices/languages'

export const store = configureStore({
    reducer: {
        app: app,
        languages: languages,
        vocabLists: vocabLists
    }
})