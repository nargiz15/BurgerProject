import { Link } from "react-router-dom"
import BurgerBanner from "../assets/banneryeni.jpg"
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="mainPage" style={{backgroundImage:`url(${BurgerBanner})`}}>
    <div className="order">
    <Link to="/menu">
    <button>Sifariş ver:)</button>
    </Link>
    </div>


    </div>
  )
}

export default Home