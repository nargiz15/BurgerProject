import BurgerLogo from "../assets/burgerlogo.png"
import { Link } from "react-router-dom"
import "../styles/NavBar.css"



const NavBar = () => {
  return (
    <div className="navbar"> 
    <div className="main">
    <img src={BurgerLogo} alt="BurgerLogo" />
    </div>

    <div className="mainLink">
    <Link to="/" >ƏsasSəhifə</Link>
    <Link to="/menu" >Menu</Link>
    <Link to="/about" >Haqqımızda</Link>
    <Link to="/contact" >Əlaqə</Link>
    </div>
 
    
    </div>
    
    
    

  )
}

export default NavBar