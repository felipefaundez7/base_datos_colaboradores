import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { nombre, BaseColaboradores } from './utils/BaseColaboradores';

import Listado from './components/Listado/Listado';
import Formulario from './components/Formulario/Formulario';
import Buscador from './components/Buscador/Buscador'; // Asegúrate de importar el componente Buscador
import Alert from './components/Alert/Alert';

function App() {
  const [colab, setColab] = useState(BaseColaboradores);
  const [filteredColab, setFilteredColab] = useState([]); // Nuevo estado para los colaboradores filtrados
  const [message, setMessage] = useState(null); // Estado para el mensaje de éxito o error
  
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
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='tituloybusqueda'>
            <h2 className='titulo'>Lista de colaboradores</h2>
            <Buscador setFilteredColab={filterColaboradores}/>
          </div>
          <Listado tableItem={filteredColab.length > 0 ? filteredColab : colab} />
        </div>
        <div className='col-md-6'>
          <Formulario setColab={setColab} colab={colab} setMessage={setMessage} />
          <Alert message={message} type={message && (message.includes('éxito') ? 'success' : 'danger')} />
        </div>
      </div>
    </div>
  );
}

export default App;
