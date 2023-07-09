import { Container, Alert, NavLink } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <Alert variant="primary" className="text-center header-section">
      <Container>
        <h1 className="display-4">RUBRIK</h1>
      </Container>
    </Alert>
  );
};

export default Header;
