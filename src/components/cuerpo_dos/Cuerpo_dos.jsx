import Cards from "../cards/Cards";
import foto5 from "../../assets/img/foto5.jpg";
import foto6 from "../../assets/img/foto6.jpg";
import foto7 from "../../assets/img/foto7.jpg";
import "../../styles/Cuerpo_dos.css";

const Cuerpo_dos = () => {
  return (
    <div className="container2" id="cuerpo_dos">
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          <div className="col-md-4">
            <Cards image={foto5} title="CUIDADO DE ENFERMOS" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ducimus dolores, tenetur doloremque odio officia dicta maiores nobis? Quidem repellat deserunt perspiciatis officiis! Temporibus earum numquam quaerat doloribus mollitia dolores"/>
          </div>
          <div className="col-md-4">
            <Cards image={foto6} title="CUIDADO DE ADULTOS MAYORES" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ducimus dolores, tenetur doloremque odio officia dicta maiores nobis? Quidem repellat deserunt perspiciatis officiis! Temporibus earum numquam"/>
          </div>
          <div className="col-md-4">
            <Cards image={foto7} title="CUIDADO DE NIÑOS" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ducimus dolores, tenetur doloremque odio officia dicta maiores nobis? Quidem repellat deserunt perspiciatis officiis! Temporibus earum numquam quaerat doloribus mollitia dolores"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuerpo_dos;
