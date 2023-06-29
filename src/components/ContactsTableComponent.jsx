import React from 'react';
import Table from 'react-bootstrap/Table';

function ContactsTableComponent({ dados }) {
  return (
    <Table striped bordered hover className="w-25 mx-auto mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>nome</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {dados
          ? dados.map((contact, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
              </tr>
            ))
          : null}
      </tbody>
    </Table>
  );
}

export default ContactsTableComponent;
