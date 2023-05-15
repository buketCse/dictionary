import React from 'react'
import './header.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import LanguageMenu from '../LanguageMenu'
import LearningScreenMenu from '../LearningScreen/LearningScreenMenu'
import UserMenu from '../UserMenu'
import VocabularyLists from '../VocabularyLists'

export default function Header(props){
  const username='Username'

    return <div className="header-dict">
        <UserMenu username={username}/>
        <div className="header-buttons h-100 d-inline-flex align-items-center ">
            <LanguageMenu/>
            <VocabularyLists/>
            <LearningScreenMenu/>
        </div>
    </div>
}