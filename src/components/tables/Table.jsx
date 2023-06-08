import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const alert = withReactContent(Swal)

const Table = () => {

   const [consultasList, setConsultas] = useState([])

   const getConsultas = async () => {
      const response = await fetch("http://localhost:8080/consultas");
      const consultasbd = await response.json();
      setConsultas(consultasbd)
   }

   const deleteConsulta = (id) => {
      fetch(`http://localhost:8080/consultas/${id}`, {
      method: 'DELETE',
   })
      .then((response) => {
         if(response.ok) {
            alert.fire(
               'Bien hecho!',
               'Haz borrado correctamente',
               'success'
            )
            getConsultas();
         } else {
            alert.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'A ocurrido un error, realiza nuevamente',
             })
         }
      })
      .catch((error) => console.error(error));
   }

   useEffect(() => {
      getConsultas();
   },[]);

   return (
      <div className="container mt-4">
         <table className="table table-hover">
            <thead>
               <tr>
                  <th scope="col">N°</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Email</th>
                  <th scope="col">Descripción</th>
                  <th scope="col"></th>
               </tr>
            </thead>
            <tbody>
               {
                  consultasList.map((value) => {
                     return (
                        <tr key={value.id}>
                           <th scope="row">{value.id}</th>
                           <td>{value.nombre}</td>
                           <td>{value.email}</td>
                           <td>{value.descripcion}</td>
                           <td>
                              <button type="button" className="btn btn-danger" onClick={()=> {
                                 deleteConsulta(value.id);
                              }}><i className="fa-solid fa-trash"></i></button>
                           </td>
                        </tr>
                     )
                  }) 
               }
            </tbody>
            </table>
      </div>
   )
}


export default Table;