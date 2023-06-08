import '../../styles/Header.css'
import logo from '../../assets/img/logo.png'
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
   return (
      <header className="header">
         <section className="topbar">
            <div className="container">
               <ul className="top-link">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Doctors</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">FAQ</a></li>
               </ul>
               <ul className="top-contact">
                  <li><i className="fa fa-phone"></i>+880 1234 56789</li>
                  <li>
                     <i className="fa fa-envelope"></i><a href="#">support@yourmail.com</a>
                  </li>
               </ul>
            </div>
         </section>

         <nav className="nav navbar-light bg-light">
            <div className="logo">
               <img src={logo} alt="" />
               <p><span className="slogan">Med</span>ical</p>
            </div>
            <div className="justify-content-end">
               <ul className="menu">
                  <li>
                     <Link to="/">INICIO</Link>
                  </li>

                  <li>
                     <a href="#cuerpo_uno">NOSOTROS</a>
                  </li>
                  
                  <li>
                     <a href="#cuerpo_dos">SERVICIOS</a>
                  </li>
                  <li>
                     <a href="#cuerpo_tres">CONTACTO</a>
                  </li>

                  <li>
                     <div className="btn-group">
                        <button
                           className="btn bg-primary dropdown-toggle"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                        >
                           CONSULTAS
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                           <li>
                              <Link to="/consultas"><a className="dropdown-item">Ver consultas</a></Link>
                           </li>
                        </ul>
                     </div>
                  </li>
               </ul>
            </div>
         </nav>
         <Outlet/>
      </header >
   );
};


export default Header;