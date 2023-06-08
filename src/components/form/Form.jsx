import "../../styles/Form.css";
import { useState } from "react";



const Form = () => {

   const [nombre,setNombre] = useState("");
   const [email,setEmail] = useState("");
   const [descripcion,setDescripcion] = useState("");

   const enviarDatos = () => {
      console.log(nombre,email,descripcion);
      const consulta = {
         nombre: nombre,
         email: email,
         descripcion: descripcion
      }

      let valores = JSON.stringify(consulta);

      fetch(`http://localhost:8080/consultas`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: valores,
   })
      .then((response) => {
         if(response.ok) {
            alert("Los datos se han INSERTADO correctamente")
            setNombre("");
            setEmail("");
            setDescripcion("");
            // window.location.href = rutaDeseada;
         } else {
            alert("ERROR!!!!! los datos NO se han insertado")
         }})
      .catch((error) => console.error(error));
   }

   return (
      <form className="formulario" id="form" >
         <div className="mb-4">
            <h4>
               Entréganos los datos relevantes para tu consulta y te responderemos lo más pronto posible.
            </h4>
         </div>
         
         <div className="mb-4">
            <input type="text" className="form-control" id="nombre" placeholder="Nombre:" required value={nombre} onChange={e=>{setNombre(e.target.value)}}/>
         </div>
         
         <div className="mb-4">
            <input type="email" className="form-control" id="email" placeholder="Email:" required value={email} onChange={e=>{setEmail(e.target.value)}}/>
         </div>
         
         <div className="mb-4">
            <textarea type="text" className="form-control" id="descripcion" placeholder="Descripción:" rows="3" required value={descripcion} onChange={e=>{setDescripcion(e.target.value)}}></textarea>
         </div>
         
         <input type="submit" value="Enviar" id="enviar" className="btn" onClick={(e)=>{
            e.preventDefault()
            enviarDatos()
          }}></input>

      </form>
   );
};

export default Form;
