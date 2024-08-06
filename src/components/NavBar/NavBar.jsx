import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { Fragment } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavBar() {
  // Solución para el error de ESLint
  React.createElement('div');

  return (
    <Fragment>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 navbar" data-bs-theme="light">
          <Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand as={Link} to="/"> 
              <FontAwesomeIcon icon={faGamepad} /> Bizarro Steam
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Logo
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/" className="nav-link">
                    Inicio
                  </Link>
                  <Link to="/contacto" className="nav-link">
                    Contacto
                  </Link>
                  <Link to="/about" className="nav-link"> 
                    Nosotros
                  </Link>
                  <NavDropdown title="Catálogo" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Buscar</Button>
                  <CartWidget /> 
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </Fragment>
  );
}

export default NavBar;
