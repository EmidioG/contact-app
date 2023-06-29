import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactFormComponent({ setDados }) {
  useEffect(() => {
    setDados(JSON.parse(localStorage.getItem('dados')));
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClick = (mano) => {
    mano.preventDefault();
    if (name && email) {
      setDados((dado) => {
        if (dado) {
          dado = [...dado, { name, email }];
        } else {
          dado = [{ name, email }];
        }
        localStorage.setItem('dados', JSON.stringify(dado));
        return dado;
      });
    }
  };
  return (
    <Form className="w-25 mx-auto mt-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Coloque seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleClick}>
        Salvar
      </Button>
    </Form>
  );
}

export default ContactFormComponent;
