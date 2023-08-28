import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Formulario({ setColab, colab, setMessage }) {
  const [input, setInput] = useState({});
  
  

  function handleInput(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
  e.preventDefault();

  if (!input.nombre || !input.correo || !input.edad || !input.cargo || !input.telefono) {
    setMessage('Todos los campos deben estar completos.');
    return;
  }

  setColab([...colab, input]);
  setMessage('Colaborador agregado con éxito.');
  setInput({});
}

return (
  <div className='main-div-formulario'>
    <h5>Agregar Colaborador</h5><br />
    <Form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-container">
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
        <Button className="buttonColor btn-Colaborador mb-3" type="submit">
          Agregar colaborador
        </Button>
      </div>
    </Form>
  </div>
);
}
