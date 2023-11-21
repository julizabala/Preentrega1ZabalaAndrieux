import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from 'react-router-dom';


const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to={"/"}>Comic Store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> Inicio</Nav.Link>
            <Nav.Link href="#comoComprar">¿Como Comprar?</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Comic</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Manga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Historietas Nacionales</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Merchandasing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Quienes somos</Nav.Link>
          </Nav>
          <CartWidgetComponent/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;