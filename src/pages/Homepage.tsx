import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";

const Homepage = () => {
  return (
    <div>
      <Navigation />
      <Container fluid className="hero-section">
        <h1>Hey good looking, what you got cooking?</h1>
      </Container>
    </div>
  );
};

export default Homepage;
