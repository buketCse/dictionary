import {useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import { Button } from 'react-bootstrap'
import {isEmpty} from 'lodash'
import DropdownMenu from '../../helpers/DropdownMenu'
import {setShowLogin,
    setShowPreferences,
    setShowUserSettings} from '../../store/slices/appSlice'

function UserMenu(props){
    const dispatch = useDispatch()
    const dropdownMenuContainerRef = useRef(null)

    const {username='Username'}= props
    const [dropdownMenuTarget, setDropdownMenuTarget]= useState(null)
    const [dropdownMenuItems, setDropdownMenuItems] = useState([])
    const [showDropdownMenu, setShowDropdownMenu]= useState(false)
    const userDropdownItems=[
        {content:'User Settings', onClick :()=>{
          dispatch(setShowUserSettings(true))
        }},
        {content:'Preferences', onClick :()=>{
          dispatch(setShowPreferences(true))
        }},
        {content:'Log Out', onClick :()=>{
          dispatch(setShowLogin(true))
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

    return <div className="nav-item dropdown header-welcome h-100 d-inline-flex align-items-center ">
    <Button type="button" variant='dark' ref={dropdownMenuContainerRef}
      onClick={(event) => handleUserDropdownMenu(event, userDropdownItems)}>{username}</Button>
    <DropdownMenu
    container={dropdownMenuContainerRef}
    items={dropdownMenuItems}
    show={showDropdownMenu}
    target={dropdownMenuTarget}
    onHide={() => {setShowDropdownMenu(false)}}
  />
</div>
}

export default UserMenu