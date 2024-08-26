import React  from 'react'
import '../../Styles/HeaderStyle.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import coffee from '../../Assets/coffee.jpg'

function Header() {

  return (
    <>
    <header>
    <Navbar collapseOnSelect expand="lg">
    <Container >
        <Navbar.Brand href="#home">
          <Link to="/" className="Logo">
            <img src={coffee} alt='Logo' className='img-fluid logo_image' /> <span>Coffee</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="Hero72" />
        <Navbar.Collapse id="Hero72">
          <Nav className="ms-auto">
          {/* className={(isActive) => (isActive ? "text-orenge-700" : "text-white-700")} */}
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Services">Services</Nav.Link>
            <Nav.Link as={Link} to="/Why_Us">Why Us</Nav.Link>
            <Nav.Link as={Link} to="/Gallary">Gallary</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/">
            <div>
            <i class="bi bi-bag fs-5"></i>
            <em className="roundpoint"><sup>2</sup></em>
            </div>
            </Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    </>
  )
}

export default Header;