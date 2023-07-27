import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
import app from './slices/appSlice'
import vocabLists from './slices/vocabLists'
import languages from './slices/languages'
import post from './slices/post'
import vocabApi from './slices/apis/vocabs'

export const store = configureStore({
    reducer: {
        app: app,
        languages: languages,
        post: post,
        vocabLists: vocabLists,
        vocabApiReducer: vocabApi.reducer
    },
    middleware: (getDefaultMiddleware)=> {
        return getDefaultMiddleware()
      .concat(vocabApi.middleware)
    }
})

export {
    useFetchVocabsMutation,
  useCreateVocabMutation
} from './slices/apis/vocabs'