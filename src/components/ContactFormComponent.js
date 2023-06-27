import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactFormComponent = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const handleClick = (e) => {
    localStorage.setItem(name, email);
  };
  return (
    <Form className="w-25 mx-auto mt-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Coloque seu nome"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleClick}>
        Salvar
      </Button>
    </Form>
  );
};

export default ContactFormComponent;
