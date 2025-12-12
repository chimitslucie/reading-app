import logo from '../Assets/Images/logo.png';
import { Link } from 'react-router';

function Nav() {
    return (
        <div
            className="nav"
        >
            <img src={logo} alt="livre" />
            <div className="navBar">
                <ul className='navList'>
                    <li className="navItem">
                        <Link className='navLink' to={'/'}>Home</Link>
                    </li>
                    <li className="navItem">
                        <Link className='navLink' to={'/'}>Wishlist</Link>
                    </li>
                    <li className="navItem">
                        <Link className='navLink' to={'/'}>Bibliothèque</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;