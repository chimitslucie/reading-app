import Nav from '../Components/nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

function BookInProgress() {
    return (
        <div id="bookInProgress">
            <div className="hero">
                <div className="container">
                    <Nav />
                    <div className="heroContent">
                        <div className="heroContentTitle">
                            <FontAwesomeIcon icon={faBookOpen} className='icon' />
                            <h1 className='title'>
                                livres en cours
                            </h1>
                        </div>
                        <div className="heroContentText">
                            <p className="text">
                                Suivez ici vos lectures en cours, ces histoires qui vous accompagnent au fil des jours.
                            </p>
                            <p className="text">
                                Un espace pour garder le fil, savourer chaque page et avancer sereinement dans vos aventures littéraires.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookInProgress