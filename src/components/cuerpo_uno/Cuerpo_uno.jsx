import "../../styles/Cuerpo_uno.css";
import foto1 from "../../assets/img/foto4.jpg";

const Cuerpo_uno = () => {
  return (
    <div className="elemenCuerpo" id="cuerpo_uno">
      <div className="imgCuerpo">
        <img src={foto1} className="d-block w-100" alt="..." />
      </div>

      <div>
        <h2 className="nomDoc">Dr. Angelica Medina</h2>
        <p className="parrafo">
          ¡Hola! Soy la Dra. Angélica, una apasionada médica comprometida con
          brindar atención de calidad y cuidado compasivo a mis pacientes. Me
          gradué con honores de la Universidad de Medicina de renombre, donde
          adquirí conocimientos sólidos y habilidades clínicas excepcionales.
        </p>

        <p className="parrafo">
          Con más de una década de experiencia en medicina, he trabajado en
          diversos entornos, desde hospitales de primer nivel hasta clínicas
          comunitarias, lo que me ha permitido enfrentar una amplia gama de
          casos médicos. Mi enfoque se centra en la medicina integral, poniendo
          énfasis en la prevención y promoción de la salud. Como médica, mi
          objetivo es ayudar a mis pacientes a alcanzar su máximo bienestar,
          tanto físico como emocional. Estoy emocionada de colaborar con ustedes
          y ser parte de su viaje hacia una vida saludable y feliz. ¡Juntos
          podemos lograrlo!
        </p>
      </div>
    </div>
  );
};

export default Cuerpo_uno;
