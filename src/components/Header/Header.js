import React , {useRef, useState} from 'react'
import {isEmpty} from 'lodash'
import './header.scss'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import DropdownMenu from '../../helpers/DropdownMenu'

export default function Header(props){
  const dropdownMenuContainerRef = useRef(null)
  const [showDropdownMenu, setShowDropdownMenu]= useState(false)
  const [dropdownMenuTarget, setDropdownMenuTarget]= useState(null)
  const [dropdownMenuItems, setDropdownMenuItems] = useState([])
  const userDropdownItems=[
    {content:'Test1', onClick :()=>{console.log('Click 1')}},
    {content:'Test2', onClick :()=>{console.log('Click 2')}},
    {content:'Test3', onClick :()=>{console.log('Click 3')}}
  ]

  const handleUserDropdownMenu = (event, items=[]) => {
    console.log('event',event)
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
            <Button type="button" variant='light'  ref={dropdownMenuContainerRef}
              onClick={(event) => handleUserDropdownMenu(event, userDropdownItems)}>Username</Button>
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