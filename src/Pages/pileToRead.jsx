import Nav from '../Components/nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

function PileToRead() {
    return (
        <div id="pileToRead">
            <div className="hero">
                <div className="container">
                    <Nav />
                    <div className="heroContent">
                        <div className="heroContentTitle">
                            <FontAwesomeIcon icon={faBookmark} className='icon' />
                            <h1 className='title'>
                                pile a lire
                            </h1>
                        </div>
                        <div className="heroContentText">
                            <p className="text">
                                Bienvenue dans votre pile à lire, ce joli espace où patientent vos prochaines aventures littéraires.
                            </p>
                            <p className="text">
                                Parcourez vos futures lectures, laissez monter l’envie, et choisissez le livre qui accompagnera votre prochain moment de douceur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PileToRead;