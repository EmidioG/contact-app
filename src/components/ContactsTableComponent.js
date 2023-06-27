import React from "react";
import Table from "react-bootstrap/Table";

const ContactsTableComponent = () => {
  return (
    <Table striped bordered hover className="w-25 mx-auto mt-4" >
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>mark@aleluia.jesus</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Jacob@amem.god</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ContactsTableComponent;
