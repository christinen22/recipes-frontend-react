import React from "react";
import { Container, Alert } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <Alert variant="primary" className="text-center">
      <Container>
        <h1 className="display-4">RUBRIK</h1>
      </Container>
    </Alert>
  );
};

export default Header;
