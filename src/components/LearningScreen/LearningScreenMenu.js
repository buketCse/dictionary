import {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Button } from 'react-bootstrap'
import {isEmpty} from 'lodash'
import DropdownMenu from '../../helpers/DropdownMenu'
import {setShowLearningScreen} from '../../store/slices/appSlice'
import {setVocabListName} from '../../store/slices/vocabLists'

const selectFromState=(state)=>({
    showLearningScreen: state.app.showLearningScreen
  })

function LearningScreenMenu(props){
    const dropdownMenuContainerRef = useRef(null)
    const dispatch = useDispatch()
    const {
        showLearningScreen
      } = useSelector(selectFromState)

    const [dropdownMenuTarget, setDropdownMenuTarget]= useState(null)
    const [dropdownMenuItems, setDropdownMenuItems] = useState([])
    const [showDropdownMenu, setShowDropdownMenu]= useState(false)
    const userDropdownItems=[
        {content:'Vocab List -1', onClick :()=>{
          dispatch(setVocabListName('Vocab List -1'))
          dispatch(setShowLearningScreen(true))
        }},
        {content:'Vocab List -2', onClick :()=>{
          dispatch(setVocabListName('Vocab List -2'))
          dispatch(setShowLearningScreen(true))

        }},
        {content:'Vocab List -3', onClick :()=>{
          dispatch(setVocabListName('Vocab List -3'))
          dispatch(setShowLearningScreen(true))

        }}
      ]

    const handleStartLearningMenu = (event, items=[]) => {
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
    <Button type="button" variant='success' ref={dropdownMenuContainerRef}
      onClick={(event) => handleStartLearningMenu(event, userDropdownItems)}>Start Learning</Button>
    <DropdownMenu
    container={dropdownMenuContainerRef}
    items={dropdownMenuItems}
    show={showDropdownMenu}
    target={dropdownMenuTarget}
    onHide={() => {setShowDropdownMenu(false)}}
  />
</div>
}

export default LearningScreenMenu