import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import logoGrande from "../img/logoGrande.png";
import Form from 'react-bootstrap/Form';

function NavBar() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
			<Container>
				<Navbar.Brand href="#home">
					<a href="#home"><img src={logoGrande} alt="Logo Gold" width={100} /></a>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="m-auto">
						<Nav.Link href="#home">INICIO</Nav.Link>
						<Nav.Link href="#link">EMPRESA</Nav.Link>
						<Nav.Link href="#link">CONTACTO</Nav.Link>
						<NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								Suplementos
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Store</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Contacto</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								#MomentoGold
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
					</Form>  
				</Navbar.Collapse>
			</Container>
			<CartWidget />
		</Navbar>
	);
}

export default NavBar;
