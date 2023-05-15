import {useState} from 'react'
import {useSelector} from 'react-redux'
import BodyComponent from "./components/Body/BodyComponent";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from './components/Login'
import UserSettings from './components/UserSettings'
import Preferences from './components/Preferences'
import LearningScreen from './components/LearningScreen'

const selectFromState=(state)=>({
  showLearningScreen: state.app.showLearningScreen,
  showLogin: state.app.showLogin,
  showPreferences: state.app.showPreferences,
  showUserSettings: state.app.showUserSettings,
  vocabListName: state.vocabLists.vocabListName
})

function App(props) {
  const {
    showLearningScreen,
    showLogin,
    showPreferences,
    showUserSettings,
    vocabListName
  } = useSelector(selectFromState)
console.log('showLearningScreen',showLearningScreen)
  return (
    <div className="dictionary-app">
      <Header
      />
      {showUserSettings ?
        <UserSettings/>
        :showPreferences ?
        <Preferences/> 
        : showLogin ?
        <Login/>
        : showLearningScreen ?
        <LearningScreen
        vocabListName={vocabListName}/>
        :<BodyComponent/>
      }
      <Footer/>
    </div>
  )
}

export default App
