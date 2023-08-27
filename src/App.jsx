import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { nombre, BaseColaboradores } from './utils/BaseColaboradores';
import Listado from './components/Listado/Listado';
import Formulario from './components/Formulario/Formulario';
import Buscador from './components/Buscador/Buscador'; // Asegúrate de importar el componente Buscador

function App() {
  const [colab, setColab] = useState(BaseColaboradores);
  const [filteredColab, setFilteredColab] = useState([]); // Nuevo estado para los colaboradores filtrados

  // Función para filtrar los colaboradores
  const filterColaboradores = (searchTerm) => {
    const filtered = BaseColaboradores.filter((colaborador) => {
      // Realiza la búsqueda en todos los campos del colaborador
      return Object.values(colaborador).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredColab(filtered);
  };

  return (
    <div className='main-div'>
      <h2>Lista de colaboradores</h2>
      <div className='main-div-buscador'>
      <Buscador setFilteredColab={filterColaboradores} /> {/* Agrega el componente Buscador */}
      </div>
      <div className='main-div-tabla'>
      <Listado tableItem={filteredColab.length > 0 ? filteredColab : colab} />
      <Formulario setColab={setColab} colab={colab} />
      </div>
    </div>
  );
}

export default App;
