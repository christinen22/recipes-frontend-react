/* import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <Navbar bg="black" expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle onClick={handleToggle} aria-controls="navbarHome" />

        <Navbar.Collapse
          id="navbarHome"
          className={`${isActive ? "show" : ""}`}
        >
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/recipes">
              Alla recept
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categories/1">
              Kyckling
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categories/2">
              Nötkött
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categories/3">
              Vegetariskt
            </Nav.Link>
            <Nav.Link as={NavLink} to="/create">
              Skapa recept
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
 */
