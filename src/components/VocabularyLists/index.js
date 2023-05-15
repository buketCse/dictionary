import {useRef, useState} from 'react'
import { Button } from 'react-bootstrap'
import {isEmpty} from 'lodash'
import DropdownMenu from '../../helpers/DropdownMenu'

function VocabularyLists(props){
    const dropdownMenuContainerRef = useRef(null)

    const [dropdownMenuTarget, setDropdownMenuTarget]= useState(null)
    const [dropdownMenuItems, setDropdownMenuItems] = useState([])
    const [showDropdownMenu, setShowDropdownMenu]= useState(false)
    const userDropdownItems=[
        {content:'Vocab List -1', onClick :()=>{
        }},
        {content:'Vocab List -2', onClick :()=>{
        }},
        {content:'Vocab List -3', onClick :()=>{
        }}
      ]

    const handleVocabularyListsMenu = (event, items=[]) => {
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
      onClick={(event) => handleVocabularyListsMenu(event, userDropdownItems)}>Vocabulary Lists</Button>
    <DropdownMenu
    container={dropdownMenuContainerRef}
    items={dropdownMenuItems}
    show={showDropdownMenu}
    target={dropdownMenuTarget}
    onHide={() => {setShowDropdownMenu(false)}}
  />
</div>
}

export default VocabularyLists