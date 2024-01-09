import Data from "../Info/Data"
import MenuItems from "./MenuItems"
import "../styles/Menu.css"

const Menu = () => {
  return (
    <div className="menu">
    <h1 className="menuTitle">Burgerlərimiz</h1>
    <div className="menuList">
      {Data.map((menuItem, key)=>{
        return(
        <MenuItems
        key={key}
        image={menuItem.image}
        name={menuItem.name}
        content={menuItem.content}
        price={menuItem.price}
        />)
      })}
    </div>

    </div>
  )
}

export default Menu