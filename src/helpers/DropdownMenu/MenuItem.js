
const MenuItem = ({ item, onHide }) => {
  const {
    content='',
    hidden =false,
    icon=null,
    index=null,
    onClick=()=>{}
  }= item

  const handleClickMenuItem = (menuItem, event) => {
    onClick(event)
    // onHide()
  }

  if (item === 'separator') {
    return <hr className="separator" />
  }

  return (
    <li
      aria-hidden="true"
      hidden= {hidden}
      tabIndex={index}
      onClick={(event) => handleClickMenuItem(item, event)}
    >
        {icon && (<span>
        {typeof icon === 'string' ? <i className={icon} /> : icon}
      </span>)}
        <span>{content}</span>
    </li>
  )
}

export default MenuItem
