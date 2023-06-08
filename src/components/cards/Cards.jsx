import PropTypes from 'prop-types';
import "../../styles/Cards.css";

const Cards = ({image,title,description}) => {
   return (
      <div className="card text-center">
         <img src={image} alt=""/>
         <div className="card-body contenido">
            <h3 className="card-title text-dark"> {title} </h3>
            <p className="card-text text-secondary">
               {description}
            </p>
            <a href="#!">Leer Más</a>
         </div>
      </div>
   )
}

Cards.propTypes = {
   image: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
};

export default Cards;