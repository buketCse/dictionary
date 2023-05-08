import {useState} from 'react'
import {useSelector} from 'react-redux'
import BodyComponent from "./components/Body/BodyComponent";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from './components/Login'
import UserSettings from './components/UserSettings'
import Preferences from './components/Preferences'

const selectFromState=(state)=>({
  showLogin: state.app.showLogin,
  showPreferences: state.app.showPreferences,
  showUserSettings: state.app.showUserSettings
})

function App(props) {
  const {
    showLogin,
    showPreferences,
    showUserSettings
  } = useSelector(selectFromState)

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
        :<BodyComponent/>
      }
      <Footer/>
    </div>
  )
}

export default App
