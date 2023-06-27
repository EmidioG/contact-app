import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const HeaderComponent = () => {
  return (
    <>
      <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container className="">
          <Navbar.Brand href="#home">Agenda</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Sobre a agenda</Nav.Link>
              <NavDropdown title="Crie sua Agenda" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Agenda diária
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Agenda semanal
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Agenda mensal
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Agenda trimestral
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderComponent;
