import { Popover, Overlay } from 'react-bootstrap'
import MenuList from './MenuList'
import './dropdownMenu.scss'


const DropdownMenu = ({ container, items, show, target, onHide }) => {

  return (
    <Overlay
      container={container}
      delay={{ show: 250, hide: 400 }}
      flip
      rootClose
      placement="bottom"
      show={show}
      target={target}
      transition={true}
      onHide={onHide}
    >
      <Popover id="popover-container">
        <Popover.Body >
          <MenuList className="dropdown-menu-list" items={items} onHide={onHide} />
        </Popover.Body>
      </Popover>
    </Overlay>
  )
}

export default DropdownMenu
