import Nav from '../Components/nav';
import { PiListHeartBold } from "react-icons/pi";

function Wishlist() {
    return (
        <div id="wishlist">
            <div className="hero">
                <div className="container">
                    <Nav />
                    <div className="heroContent">
                        <div className="heroContentTitle">
                            <PiListHeartBold className='icon' />
                            <h1 className='title'>
                                wishlist
                            </h1>
                        </div>
                        <div className="heroContentText">
                            <p className="text">
                                Laissez-vous porter par vos envies de lecture et rassemblez ici tous les livres qui vous font rêver.
                            </p>
                            <p className="text">
                                Un petit coin pour noter vos coups de cœur en devenir et laisser grandir vos futures envies de livres.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist;