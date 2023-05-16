import React from 'react'
import './header.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import LanguageMenu from '../Languages/LanguageMenu'
import LearningScreenMenu from '../LearningScreen/LearningScreenMenu'
import UserMenu from '../UserMenu'
import VocabularyListsMenu from '../VocabularyLists/VocabularyListsMenu'

export default function Header(props){
  const username='Username'

    return <div className="header-dict">
        <UserMenu username={username}/>
        <div className="header-buttons h-100 d-inline-flex align-items-center ">
            <LanguageMenu/>
            <VocabularyListsMenu/>
            <LearningScreenMenu/>
        </div>
    </div>
}