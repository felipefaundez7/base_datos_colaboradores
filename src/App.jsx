import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { nombre, BaseColaboradores } from './utils/BaseColaboradores';



import Listado from './components/Listado/Listado';
import Formulario from './components/Formulario/Formulario';

function App() {
  const [colab, setColab] = useState(BaseColaboradores);
  console.log(BaseColaboradores);
  return (
    <div className='main-div'>
      <Listado tableItem={BaseColaboradores}/>
      <Formulario setColab={setColab} colab={colab}/>
      <Formulario/>
    </div>
  );
}

export default App;
