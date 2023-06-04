import "../../styles/Cuerpo_tres.css";

const Cuerpo_tres = () => {
  return (

    <div className="container3">

      <div className="formulario">
        <form className="furmulario" id="from_busqueda">
          <h3>
            Entreganos los datos relevantes para tu consulta y te responderemos
            los mas pronto posible
          </h3>

          <label htmlFor="nombre"></label>
          <input type="text" placeholder="Nombre" id="nombre" required></input><br/>

          <label htmlFor="email"></label>
          <input type="text" placeholder="Email" id="email" required></input><br/>

          <label htmlFor="Descriccion"></label>
          <textarea type="text" placeholder="Drescriccion" id="Descriccion" rows="6" cols="40" required></textarea><br/>

          <input type="submit" value="Enviar" id="eviar"></input>
 
        </form>
      </div>

      <div className="textcuerpo3">
            <b>Te responderemos a la brevedad, no duces en escribirnos!</b>   
      </div>
    </div>
  );
};

export default Cuerpo_tres;
