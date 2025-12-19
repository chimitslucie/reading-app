import Nav from '../Components/nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import BtnAddBook from '../Components/btnAddBook';

function HomePage() {
  return (
    <div id="homePage">
      <div className="hero">
        <div className="container">
          <Nav />
          <div className="heroContent">
            <div className="heroContentTitle">
              <FontAwesomeIcon icon={faBook} className='icon' />
              <h1 className='title'>
                votre univers littéraire
              </h1>
            </div>
            <div className="heroContentText">
              <p className="text">
                Bienvenue sur votre tableau de bord littéraire, pensé pour tous les amoureux des livres.
              </p>
              <p className="text">
                Suivez facilement vos lectures en cours, gérez votre wishlist et explorez votre bibliothèque personnelle en un clin d’œil.
              </p>
              <p className="text">
                Un outil simple, clair et inspirant pour accompagner chaque page de votre aventure littéraire.
              </p>
              <p className="text">
                Laissez-vous guider et vivez pleinement votre passion pour les livres !
              </p>
            </div>
          </div>
        </div>
      </div>
      <BtnAddBook />
    </div>
  );
}

export default HomePage;