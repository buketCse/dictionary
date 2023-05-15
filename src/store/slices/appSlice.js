import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showLanguageMenu: false,
  showLearningScreen: false,
  showLogin: false,
  showPreferences: false,
  showUserSettings: false,
  showVocabularyLists: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowLanguageMenu: (state, action) => {
      state.showLanguageMenu = action.payload
      state.showPreferences = false
      state.showUserSettings = false
      state.showLogin = false
      state.showLearningScreen = false
      state.showVocabularyLists = false
    },
    setShowLearningScreen: (state, action) => {
      state.showLearningScreen = action.payload
      state.showPreferences = false
      state.showUserSettings = false
      state.showLanguageMenu = false
      state.showLogin = false
      state.showVocabularyLists = false
    },
    setShowLogin: (state, action) => {
      state.showLogin = action.payload
      state.showPreferences = false
      state.showUserSettings = false
      state.showLanguageMenu = false
      state.showLearningScreen = false
      state.showVocabularyLists = false
    },
    setShowPreferences: (state, action) => {
        state.showPreferences = action.payload
        state.showLogin = false
        state.showUserSettings = false
        state.showLanguageMenu = false
        state.showLearningScreen = false
        state.showVocabularyLists = false
      },
    setShowUserSettings: (state, action) => {
        state.showUserSettings = action.payload
        state.showPreferences = false
        state.showLogin = false
        state.showLanguageMenu = false
        state.showLearningScreen = false
        state.showVocabularyLists = false
    },
    setShowVocabularyLists: (state, action) => {
      state.showVocabularyLists = action.payload
      state.showPreferences = false
      state.showLogin = false
      state.showLanguageMenu = false
      state.showLearningScreen = false
      state.showUserSettings = false
  }
  }
})

export const {
  setShowLanguageMenu,
  setShowLearningScreen,
    setShowLogin,
    setShowPreferences,
    setShowUserSettings,
    setShowVocabularyLists
} = appSlice.actions

export const showLanguageMenu = (state) => state.showLanguageMenu
export const showLearningScreen = (state) => state.showLearningScreen
export const showLogin = (state) => state.showLogin
export const showPreferences = (state) => state.showPreferences
export const showUserSettings = (state) => state.showUserSettings
export const showVocabularyLists = (state) => state.showVocabularyLists

export default appSlice.reducer
