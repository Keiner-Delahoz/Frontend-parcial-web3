import PropTypes from 'prop-types';
import '../../styles/Carousel-caption.css'

const CarouselCaption = (props) => {
   return (
      <div className="carousel-caption custom-caption">
         <h2 className="custom-title1" >{props.title1}</h2>
         <h1 className="custom-title2" >{props.title2}</h1>
         <div className="wrapper">
            <ul>
               {props.icon1}
               {props.icon2}
               {props.icon3}
            </ul>
         </div>

         <p className="custom-description">
            {props.description}
         </p>
         <a href="#!">Leer Más</a>
      </div>
   )
}

CarouselCaption.propTypes = {
   title1: PropTypes.string,
   title2: PropTypes.string,
   icon1: PropTypes.element,
   icon2: PropTypes.element,
   icon3: PropTypes.element,
   description: PropTypes.string,
};

export default CarouselCaption;