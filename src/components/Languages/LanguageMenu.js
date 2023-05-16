import {useRef, useState} from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import {isEmpty} from 'lodash'
import DropdownMenu from '../../helpers/DropdownMenu'
import {setShowLanguageMenu} from '../../store/slices/appSlice'
import {setLanguageNames} from '../../store/slices/languages'

function LanguageMenu(props){
    const dropdownMenuContainerRef = useRef(null)
    const dispatch = useDispatch()
    const [dropdownMenuTarget, setDropdownMenuTarget]= useState(null)
    const [dropdownMenuItems, setDropdownMenuItems] = useState([])
    const [showDropdownMenu, setShowDropdownMenu]= useState(false)
    const userDropdownItems=[
        {content:'English-Turkish', onClick :()=>{
          dispatch(setLanguageNames('English-Turkish'))
          dispatch(setShowLanguageMenu(true))
        }},
        {content:'Spanish-English', onClick :()=>{
          dispatch(setLanguageNames('Spanish-English'))
          dispatch(setShowLanguageMenu(true))

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
      onClick={(event) => handleUserDropdownMenu(event, userDropdownItems)}>Languages</Button>
    <DropdownMenu
    container={dropdownMenuContainerRef}
    items={dropdownMenuItems}
    show={showDropdownMenu}
    target={dropdownMenuTarget}
    onHide={() => {setShowDropdownMenu(false)}}
  />
</div>
}

export default LanguageMenu