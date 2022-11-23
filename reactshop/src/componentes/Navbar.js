import {useState} from 'react';
import Container from '../../node_modules/react-bootstrap/Container';
import Nav from '../../node_modules/react-bootstrap/Nav';
import Navbar from '../../node_modules/react-bootstrap/Navbar';
import NavDropdown from '../../node_modules/react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartshop from './CartWidget.js';
import {Link} from 'react-router-dom';

function header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="http://localhost:3000/">ReactShop</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="col-auto">
             <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="http://localhost:3000/categoria/22">Impresoras</NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:3000/categoria/1"> Pantalla</NavDropdown.Item>
         
              <NavDropdown.Item href="http://localhost:3000/categoria/2">
                Lectora
              </NavDropdown.Item>
            </NavDropdown>
              
          </Nav>
          <Nav>
            <Link to="categoria/22"> </Link>
            
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