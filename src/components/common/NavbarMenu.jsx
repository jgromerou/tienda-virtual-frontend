import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import lightModeIcon from '../../assets/images/light-mode.svg';
import darkModeIcon from '../../assets/images/dark-mode.svg';
import { useState } from 'react';
import { setTheme } from '../../utils/theme';

const NavbarMenu = () => {
  const themeLocalStorage = localStorage.getItem('theme');
  const [darkMode, setDarkMode] = useState(
    themeLocalStorage === 'dark' ? true : false
  );

  const toggleDarkMode = () => {
    darkMode
      ? (setTheme('light'), localStorage.setItem('theme', 'light'))
      : (setTheme('dark'), localStorage.setItem('theme', 'dark'));
    setDarkMode(!darkMode);
  };
  return (
    <>
      {
        <Navbar
          key="md"
          expand="md"
          className="bg-body-tertiary mb-3"
          sticky="top"
        >
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />

            <Navbar.Brand href="#">Tienda</Navbar.Brand>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Tienda
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Form className="d-flex my-1">
                    <Form.Control
                      type="search"
                      placeholder="Buscar"
                      className="me-2"
                      aria-label="Buscar"
                    />
                    <Button variant="outline-success">Buscar</Button>
                  </Form>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Button
              variant="secondary"
              className={`${darkMode ? 'bg-dark' : 'bg-light'} me-3`}
              onClick={toggleDarkMode}
            >
              <img
                src={darkMode ? darkModeIcon : lightModeIcon}
                alt={darkMode ? 'lightMode' : 'darkMode'}
              />
            </Button>
            <Nav.Link href="#" className="pe-3">
              Ir a la Tienda
            </Nav.Link>
          </Container>
        </Navbar>
      }
    </>
  );
};

export default NavbarMenu;
