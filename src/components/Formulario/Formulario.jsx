import React,  { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Formulario({ setColab, colab }) {
  const [input, setInput] = useState({});

  function handleInput(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function validateInput() {
    //se pueden  usar regex o la imaginacion
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hice submit");
    //llamo al validador para saber si los datos estan correctos
    //enviar input para agregar al array de basecolaboradores.js
    setColab([...colab, input]);
  }

  return (
    <div>
      <h5>Agregar Colaborador</h5>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* En el form va el evento */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="nombre"
            type="text"
            placeholder={input.nombre}
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="correo"
            type="email"
            placeholder="Ingrese email"
            no
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="edad"
            type="number"
            placeholder="Ingrese edad"
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="cargo"
            type="text"
            placeholder="Ingrese cargo"
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="telefono"
            type="number"
            placeholder="Ingrese telefono"
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>
        <Button className="buttonColor" type="submit">
          {/* en el button va el type */}
          Agregar colaborador
        </Button>
      </Form>
    </div>
  );
}
