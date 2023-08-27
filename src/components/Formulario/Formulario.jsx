import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Formulario({ setColab, colab }) {
  const [input, setInput] = useState({});
  const [message, setMessage] = useState(null); // Estado para el mensaje de éxito o error

  function handleInput(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!input.nombre || !input.correo || !input.edad || !input.cargo || !input.telefono) {
      setMessage('Todos los campos deben estar completos.'); // Mensaje de error si algún campo está vacío
      return;
    }

    setColab([...colab, input]);
    setMessage('Colaborador agregado con éxito.'); // Mensaje de éxito si se agrega el colaborador correctamente
    setInput({}); // Limpia los campos del formulario después de agregar
  }

  return (
    <div className='main-div-formulario'>
      <h5>Agregar Colaborador</h5>
      
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* En el form va el evento */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="nombre"
            type="text"
            placeholder="Nombre"
            value={input.nombre || ''}
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="correo"
            type="email"
            placeholder="Ingrese email"
            value={input.correo || ''}
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="edad"
            type="number"
            placeholder="Ingrese edad"
            value={input.edad || ''}
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="cargo"
            type="text"
            placeholder="Ingrese cargo"
            value={input.cargo || ''}
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="telefono"
            type="number"
            placeholder="Ingrese telefono"
            value={input.telefono || ''}
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>
        <Button className="buttonColor btn-Colaborador" type="submit">
          {/* en el button va el type */}
          Agregar colaborador
        </Button>
        {message && <p className={`alert alert-${message.includes('éxito') ? 'success' : 'danger'}`}>{message}</p>}
      </Form>
    </div>
  );
}
