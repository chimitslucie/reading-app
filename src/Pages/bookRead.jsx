import Nav from '../Components/nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

function BookRead() {
    return (
        <div id="bookRead">
            <div className="hero">
                <div className="container">
                    <Nav />
                    <div className="heroContent">
                        <div className="heroContentTitle">
                            <FontAwesomeIcon icon={faBook} className='icon' />
                            <h1 className='title'>
                                livres lus
                            </h1>
                        </div>
                        <div className="heroContentText">
                            <p className="text">
                                Retrouvez ici toutes les histoires qui ont déjà marqué votre voyage littéraire.
                            </p>
                            <p className="text">
                                Un cocon rempli de souvenirs, de pages chéries et de belles découvertes qui témoignent de votre parcours de lectrice passionnée.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookRead;