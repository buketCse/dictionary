import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
import app from './slices/appSlice'
import vocabLists from './slices/vocabLists'

export const store = configureStore({
    reducer: {
        app: app,
        vocabLists: vocabLists
    }
})