import { Container, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <NavLink to="/" className="header-link">
      <Alert variant="primary" className="text-center header-section">
        <Container fluid className="hero-section">
          <h1 className="display-4">Hey good lookin, what you got cooking?</h1>
        </Container>
      </Alert>
    </NavLink>
  );
};

export default Header;
