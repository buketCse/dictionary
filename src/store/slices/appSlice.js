import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showLogin: false,
  showPreferences: false,
  showUserSettings: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowLogin: (state, action) => {
      state.showLogin = action.payload
    },
    setShowPreferences: (state, action) => {
        state.showPreferences = action.payload
      },
    setShowUserSettings: (state, action) => {
        state.showUserSettings = action.payload
      },
  }
})

export const {
    setShowLogin,
    setShowPreferences,
    setShowUserSettings
} = appSlice.actions

export const showLogin = (state) => state.showLogin
export const showPreferences = (state) => state.showPreferences
export const showUserSettings = (state) => state.showUserSettings

export default appSlice.reducer
