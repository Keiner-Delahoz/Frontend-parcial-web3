import { useState } from "react";

const Table = () => {

   const [consultas, setConsultas] = useState([])

   const getConsultas = async () => {
      const response = await fetch("http://localhost:8080/consultas");
      const consultasbd = await response.json();
      setConsultas(consultasbd)
   }
   // getConsultas()
   console.log(consultas)

   return (
      <div className="container mt-4">
         <table className="table table-hover">
            <thead>
               <tr>
                  <th scope="col">N°</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Email</th>
                  <th scope="col">Descripción</th>
               </tr>
            </thead>
            <tbody>
               {
                  
               }
               <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
               </tr>
            </tbody>
            </table>
      </div>
   )
}

export default Table;