import { Link } from "react-router-dom"
import logo from './Assets/feedable-logo.png'

import "./Navbar.css"

export default function Navbar (props) {
    return (
        <header>
            <div className="logo-container">
                <Link to="/"><img className="logo" src={logo} alt="icon"/></Link>
            </div>
            <nav>
                <Link className="icon icon-link" to="/"><div>Feedable</div></Link>
                <div className="nav-links">
                    <Link to>Mission</Link>  
                    <div className="nav-dropdown">
                        <button className="dropbtn">Join Us
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link to="/sign-in">Sign In</Link>
                            <Link to="/sign-up">Sign Up</Link>
                        </div>
                    </div>
                    <Link to><div>Cart</div></Link>
                </div>
            </nav>
        </header>
    )
}