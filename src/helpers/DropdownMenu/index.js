import { Popover, Overlay } from 'react-bootstrap'
import MenuList from './MenuList'


const DropdownMenu = ({ container, items, show, target, onHide }) => {

  return (
    <Overlay
      container={container}
      flip
      rootClose
      placement="bottom-start"
      show={show}
      target={target}
      transition={false}
      onHide={onHide}
    >
      <Popover id="popover-container">
        <Popover.Body >
          <MenuList items={items} onHide={onHide} />
        </Popover.Body>
      </Popover>
    </Overlay>
  )
}

export default DropdownMenu
