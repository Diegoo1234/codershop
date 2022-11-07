import {useState} from 'react';
import Container from '../../node_modules/react-bootstrap/Container';
import Nav from '../../node_modules/react-bootstrap/Nav';
import Navbar from '../../node_modules/react-bootstrap/Navbar';
import NavDropdown from '../../node_modules/react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartshop from './CartWidget.js';


function header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ReactShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
             <NavDropdown title="Polos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Polos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                PeruPool
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Adidas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Nike
              </NavDropdown.Item>
            </NavDropdown>
             <NavDropdown title="Shorts" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Jean</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dril
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gamarra</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Totem
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Zapatos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Adidas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Puma
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Nike</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Jordan
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"> </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Cartshop/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default header;