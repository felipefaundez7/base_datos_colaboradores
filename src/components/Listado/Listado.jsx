import React from "react";
// import Table from "react-bootstrap/Table"; /* FORMA UNO SIN DESTRUCTURING */
import { Table } from "react-bootstrap"; /* FORMA DOS CON DESTRUCTURING */
import './Listado.css'


export default function Listado({ tableItem }) {
  const tableItems = tableItem.map((colaborador) => (
    <tr key={colaborador.id}>
      <td>{colaborador.nombre}</td>
      <td>{colaborador.correo}</td>
      <td>{colaborador.edad}</td>
      <td>{colaborador.cargo}</td>
      <td>{colaborador.telefono}</td>
    </tr>
  ));

  return (
    <div className="table-container">{/* el width del tamaño de la pantalla y un overflow */}
      <Table className="table-boot" hover borderless striped responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>{tableItems}</tbody>
      </Table>
    </div>
  );
}
