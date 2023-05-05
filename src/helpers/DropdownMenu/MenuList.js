import MenuItem from './MenuItem'

const MenuList = ({ items, onHide }) => {
  return (
    <ul>
      {items?.map((item, index) => (
        <MenuItem key={index} item={Object.assign(item, { index })} onHide={onHide} />
      ))}
    </ul>
  )
}
export default MenuList
