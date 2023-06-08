import "../../styles/Cuerpo_tres.css";
import Form from "../form/Form";

const Cuerpo_tres = () => {

  return (
    <div className="container-fluid" id="cuerpo_tres">
       <div className="container">
         <div className="row align-items-center h-100 ">
            <div className="col-md-6">
               <Form/>
            </div>
            <div className="col-md-6 text-right text-justify">
               <h1>Te responderemos a la brevedad, no dudes en escribirnos!</h1>  
            </div>
         </div>
      </div>





      {/* <div className="formulario">
        <form className="furmulario" id="from_busqueda">
          <h3>
            Entreganos los datos relevantes para tu consulta y te responderemos
            los mas pronto posible
          </h3>

          <label htmlFor="nombre"></label>
          <input type="text" placeholder="Nombre" id="nombre" required value={nombre} onChange={e=>{setNombre(e.target.value)}}></input><br/>

          <label htmlFor="email"></label>
          <input type="text" placeholder="Email" id="email" required value={email} onChange={e=>{setEmail(e.target.value)}}></input><br/>

          <label htmlFor="Descripcion"></label>
          <textarea type="text" placeholder="Drescriccion" id="Descriccion" rows="6" cols="40" required value={descripcion} onChange={e=>{setDescripcion(e.target.value)}}></textarea><br/>

          <input type="submit" value="Enviar" id="eviar" onClick={(e)=>{
            e.preventDefault()
            mostrarTodo()
          }}></input>
 
        </form>
      </div>

      <div className="textcuerpo3">
            <b>Te responderemos a la brevedad, no duces en escribirnos!</b>   
      </div> */}
    </div>
  );
};

export default Cuerpo_tres;
