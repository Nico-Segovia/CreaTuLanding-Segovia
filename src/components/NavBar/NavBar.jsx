import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <>
      {['sm'].map(expand => (
        <Navbar
          key={expand}
          expand={expand}
          className='mb-3 navbar'
          data-bs-theme='light'
        >
          <Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href='#'>
              <FontAwesomeIcon icon={faGamepad} /> Game Store
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Logo
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <Nav.Link href='#action1' className='nav-link'>GO</Nav.Link>
                  <Nav.Link href='#action2' className='nav-link'>Contacto</Nav.Link>
                  <NavDropdown
                    title='Catalogo'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href='#action3'>
                      Item
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action4'>
                      Item
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#action5'>
                      Item
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className='d-flex'>
                  <Form.Control
                    type='search'
                    placeholder='Search'
                    className='form-control'
                    aria-label='Search'
                  />
                  <Button className='buscar'>Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <CartWidget />
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
