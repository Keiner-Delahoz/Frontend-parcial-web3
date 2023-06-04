import foto1 from "../../assets/img/foto5.jpg";
import foto2 from "../../assets/img/foto6.jpg";

import "../../styles/Cuerpo_dos.css";

const Cuerpo_dos = () => {
  return (
    <div className="container2">
        
      <div className="primero">
      <img src={foto1} className="imgcuerpo1" alt="..." />
        <h1>CUIDADO DE ENFERMOS</h1>
        <p className="parrafo2">
          Instlaracion de sondas nasogastricas <br />
          Sonda Foley <br />
          Tratamientos y cuidados paleativos <br />
          Apoyo sanitario <br />
          Alimentacion y movilizacion de adultos <br />
          tratamientos <br />
          Aseo, higiene y confort <br />
          Seguridad del paciente <br /> Cuidadoras
        </p>
      </div>

      <div className="segundo">
      <img src={foto2} className="imgcuerpo2" alt="..." />
        <h1>CUIDADO DE ADULTOS MAYORES</h1>
        <p className="parrafo2">
          Curaciones <br />
          Extraccion de puntos <br />
          Cuidados pie diabeticos <br />
          Escaras o ulceras en pacientes postrados <br />
          Cuidados postquirurgicos <br />
          Administracion de tratamientos endovenosos <br />
          Instramusculares <br />
          Subcutaneo <br />
          Manejo de gastronomia <br />
        </p>
      </div>
    </div>
  );
};

export default Cuerpo_dos;
