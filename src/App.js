import {useSelector} from 'react-redux'
import BodyComponent from "./components/Body/BodyComponent";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from './components/Login'
import UserSettings from './components/UserSettings'
import Preferences from './components/Preferences'
import LearningScreen from './components/LearningScreen'
import VocabularyLists from './components/VocabularyLists'
import Languages from './components/Languages'

const selectFromState=(state)=>({
  languageNames: state.languages.languageNames,
  showLanguageMenu: state.app.showLanguageMenu,
  showLearningScreen: state.app.showLearningScreen,
  showLogin: state.app.showLogin,
  showPreferences: state.app.showPreferences,
  showUserSettings: state.app.showUserSettings,
  showVocabularyLists: state.app.showVocabularyLists,
  vocabListName: state.vocabLists.vocabListName
})

function App(props) {
  const {
    languageNames,
    showLanguageMenu,
    showLearningScreen,
    showLogin,
    showPreferences,
    showUserSettings,
    showVocabularyLists,
    vocabListName
  } = useSelector(selectFromState)
  
  return (
    <div className="dictionary-app">
      <Header
      />
      <body className='body'>
        <div className='body-dictionary'>
      {showUserSettings ?
        <UserSettings/>
        :showPreferences ?
        <Preferences/> 
        : showLogin ?
        <Login/>
        : showLanguageMenu ?
        <Languages languageNames={languageNames}/>
        : showVocabularyLists ?
        <VocabularyLists vocabListName={vocabListName}/>
        : showLearningScreen ?
        <LearningScreen
        vocabListName={vocabListName}/>
        :<BodyComponent/>
      }
      </div>
      <Footer/>
      </body>
    </div>
  )
}

export default App
