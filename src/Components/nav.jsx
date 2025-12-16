import logo from '../Assets/Images/logo.png';
import { NavLink, Link } from "react-router";
import { useState } from "react";

function Nav() {

    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(!showNav)
    }

    return (
        <div
            className="header"
        >
            <Link className='logoLink' to={'/'}>
                <img src={logo} alt="livre" className='logo' />
            </Link>
            <div id="navToggle" className={`navToggle ${showNav ? "toCross" : ""}`} onClick={handleShowNav}>
                <span className="navToggleBar navToggleBarTop"></span>
                <span className="navToggleBar navToggleBarMiddle"></span>
                <span className="navToggleBar navToggleBarBottom"></span>
            </div>
            <nav className={`nav ${showNav ? "navOpen" : ""}`}>
                <ul className='navList'>
                    <li className="navItem">
                        <NavLink className='navLink' to="/" end> Home </NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink className='navLink' to="/Wishlist" end> Wishlist </NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink className='navLink' to="/Bibliotheque" end> Bibliothèque </NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink className='navLink' to="/PileALire" end> Pile à Lire </NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink className='navLink' to="/LivresEnCours" end> Livre en Cours </NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink className='navLink' to="/LivresLus" end> Livres Lus </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;