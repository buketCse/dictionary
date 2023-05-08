import React , {useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import {isEmpty} from 'lodash'
import './header.scss'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import DropdownMenu from '../../helpers/DropdownMenu'
import {setShowLogin,
  setShowPreferences,
  setShowUserSettings} from '../../store/slices/appSlice'

export default function Header(props){
  const dispatch = useDispatch()
  const dropdownMenuContainerRef = useRef(null)
  const [showDropdownMenu, setShowDropdownMenu]= useState(false)
  const [dropdownMenuTarget, setDropdownMenuTarget]= useState(null)
  const [dropdownMenuItems, setDropdownMenuItems] = useState([])
  const userDropdownItems=[
    {content:'User Settings', onClick :()=>{
      dispatch(setShowUserSettings(true))
      dispatch(setShowPreferences(false))
      dispatch(setShowPreferences(false))
    }},
    {content:'Preferences', onClick :()=>{
      dispatch(setShowPreferences(true))
      dispatch(setShowUserSettings(false))
      dispatch(setShowLogin(false))
    }},
    {content:'Log Out', onClick :()=>{
      dispatch(setShowLogin(true))
      dispatch(setShowUserSettings(false))
      dispatch(setShowPreferences(false))
    }}
  ]

  const handleUserDropdownMenu = (event, items=[]) => {
    event.stopPropagation()
    setShowDropdownMenu(!showDropdownMenu)
    if (isEmpty(items)) {
      return
    }

    event.preventDefault()
    setDropdownMenuTarget(event.target)
    setDropdownMenuItems(items)
  }
 

    return <div className="header-dict">
        <div className="nav-item dropdown header-welcome h-100 d-inline-flex align-items-center ">
            <Button type="button" variant='dark' ref={dropdownMenuContainerRef}
              onClick={(event) => handleUserDropdownMenu(event, userDropdownItems)}>Buket Algan Caner</Button>
            <DropdownMenu
            container={dropdownMenuContainerRef}
            items={dropdownMenuItems}
            show={showDropdownMenu}
            target={dropdownMenuTarget}
            onHide={() => {setShowDropdownMenu(false)}}
          />
        </div>
        <div className="header-buttons h-100 d-inline-flex align-items-center ">
            <Button type="button" variant='dark'>Languages</Button>
            <Button type="button" variant='dark'>Vocabulary Lists</Button>
            <Button type="button" variant='success'>Start Learning</Button>
        </div>
    </div>
}