import '../../styles/Header.css'

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
               <p><span className="slogan">Medi</span>App</p>
            </div>
            <div className="justify-content-end">
               <ul className="menu">
                  <li>
                     <a href="">INICIO</a>
                  </li>

                  <li>
                     <a href="">NOSOTROS</a>
                  </li>
                  
                  {/* <li>
                     <div className="btn-group">
                        <button
                           id="btnGroupDrop1"
                           type="button"
                           className="btn bg-light dropdown-toggle"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                        >
                           Services
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                           <li>
                              <a className="dropdown-item" href="#">Órdenes Médicas</a>
                           </li>
                           <li>
                              <a className="dropdown-item" href="#">Medicamentos</a>
                           </li>
                           <li>
                              <a className="dropdown-item" href="#">Pacientes</a>
                           </li>
                        </ul>
                     </div>
                  </li> */}
                  <li>
                     <a href="">SERVICIOS</a>
                  </li>
                  <li>
                     <a href="#" className="button">CONTACTO</a>
                  </li>
               </ul>
            </div>
         </nav>

      </header >
   );
};


export default Header;