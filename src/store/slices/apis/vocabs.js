import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import * as api from '../../../api/index'

const vocabApi = createApi({
  reducerPath: 'vocabApiReducer',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000`,
    prepareHeaders: (headers) => {
      const {
        setting: { environment = '' },
        oidc: {
          user: { access_token = '' }
        }
      } = window.dashboardStore.getState()

      headers.set('Accept', 'application/json')
      headers.set('Content-Type', 'application/json')
      headers.set('environment', environment)
      headers.set('Authorization', `Bearer ${access_token}`)
      return headers
    }
  }),
  endpoints(builder) {
    return {
      fetchVocabs: builder.mutation({
        invalidatesTags: ['fetchVocabs'],
        query: (info) => {
          // const { body = {}} = info
          const {data} = api.fetchVocabs()
          return {
            url: `/posts`,
            body: data,
            method: 'get'
          }
        }
      }),
      createVocab: builder.mutation({
        invalidatesTags: ['createVocab'],
        query: (info) => {
          const {body = {}}= info
          // const { pluginId = '', method = '', body = {}, requestMethod = 'get' } = info
          // const {data} = api.createVocab()
          api.createVocab(body)
          return {
            url: `/posts/`,
            body: body,
            method: 'post'
          }

          // const { pluginId = '', method = '', body = {}, requestMethod = 'get' } = info
          // return {
          //   url: `/${pluginId}/invoke/${method}`,
          //   body: body,
          //   method: requestMethod
          // }
        }
      })
    }
  }
})

export const {
  useFetchVocabsMutation,
  useCreateVocabMutation
} = vocabApi

export default vocabApi
