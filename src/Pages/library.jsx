import Nav from '../Components/nav';
import { RiBookShelfLine } from "react-icons/ri";

function Library() {
    return (
        <div id="library">
            <div className="hero">
                <div className="container">
                    <Nav />
                    <div className="heroContent">
                        <div className="heroContentTitle">
                            <RiBookShelfLine className='icon' />
                            <h1 className='title'>
                                bibliothèque
                            </h1>
                        </div>
                        <div className="heroContentText">
                            <p className="text">
                                Découvrez votre univers littéraire rassemblé en un seul endroit, comme un cocon rempli de vos histoires préférées.
                            </p>
                            <p className="text">
                                Feuilletez vos trésors, retrouvez vos lectures passées et observez votre collection grandir au fil du temps.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Library;