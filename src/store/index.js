import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import app from './slices/appSlice'

export const store = configureStore({
    reducer: {
        app: app
    }
})