import '../../styles/Carousel.css'
import CarouselCaption from './Carousel-caption'
import slider1 from '../../assets/img/slider1.jpg'
// import slider2 from '../../assets/img/slider2.jpg'
import slider3 from '../../assets/img/slider3.jpg'


const Carousel = () => {

   return (
      <div className="carousel-container" id='carousel'>
         <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active bg-secondary" aria-current="true" aria-label="Slide 1"></button>
               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label ="Slide 2" className="bg-secondary"></button>
               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className="bg-secondary"></button>
            </div>

            <div className="carousel-inner">
               <div className="carousel-item active">
                  <img src={slider1} className="d-block w-100" alt="..."/>
                  <CarouselCaption 
                  title1="Consulta ahora" 
                  title2="Tú destino"
                  icon1={<li href="#!"><i className="fa-sharp fa-solid fa-staff-snake"></i></li>}
                  icon2={<li href="#!"><i className="fa-solid fa-heart-pulse fa-beat"></i></li>}
                  icon3={<li href="#!"><i className="fa-solid fa-wheelchair"></i></li>}
                  description="Descubre un mundo de atención médica excepcional. Te recibirán profesionales apasionados y expertos en brindar el mejor cuidado para tu bienestar."/>
               </div>
               {/* <div className="carousel-item">
                  <img src={slider2} className="d-block w-100" alt="..."/>
               </div> */}
               <div className="carousel-item">
                  <img src={slider3} className="d-block w-100" alt="..."/>
                  <CarouselCaption 
                  title1="Algo interesante" 
                  title2="Aquí quizás" 
                  icon1={<li href="#!"><i className="fa-solid fa-briefcase-medical"></i></li>}
                  icon2={<li href="#!"><i className="fa-solid fa-hand-holding-medical"></i></li>}
                  description="Te ofrecemos el mejor servicio de profesionales, quienes constan de una amplia experiencia y vocación de servicio. Confía en nosotros, no te fallaremos!!!"
                  />
               </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
               <span className="carousel-control-prev-icon bg-secondary" aria-hidden="true"></span>
               <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
               <span className="carousel-control-next-icon bg-secondary" aria-hidden="true"></span>
               <span className="visually-hidden">Next</span>
            </button>
         </div>
      </div>
   )
}

export default Carousel;