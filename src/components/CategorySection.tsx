import { Card, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import chicken from "../assets/chicken.jpg";
import beef from "../assets/beef.jpg";
import vegeterian from "../assets/vegeterian.jpg";
import pork from "../assets/pork.jpg";
import desserts from "../assets/dessert.jpg";
import bread from "../assets/bread.jpg";
import create from "../assets/hero-bg.jpg";
import Header from "./Header";
const CategorySection: React.FC = () => {
  return (
    <div className="category-section">
      <Header />
      <Row className="category-row">
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="category-card">
            <Card.Img variant="top" src={chicken} alt="Chicken Category" />
            <Card.Body>
              <Card.Title>Kyckling</Card.Title>
              <NavLink to="/categories/1" className="btn btn-primary">
                Utforska
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="category-card">
            <Card.Img variant="top" src={beef} alt="Beef Category" />
            <Card.Body>
              <Card.Title>Nötkött</Card.Title>
              <NavLink to="/categories/2" className="btn btn-primary">
                Utforska
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="category-card">
            <Card.Img
              variant="top"
              src={vegeterian}
              alt="Vegeterian Category"
            />
            <Card.Body>
              <Card.Title>Vegetariskt</Card.Title>
              <NavLink to="/categories/3" className="btn btn-primary">
                Utforska
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="category-card">
            <Card.Img variant="top" src={pork} alt="Pork Category" />
            <Card.Body>
              <Card.Title>Fläskkött</Card.Title>
              <NavLink to="/categories/4" className="btn btn-primary">
                Utforska
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="category-card">
            <Card.Img variant="top" src={desserts} alt="Dessert Category" />
            <Card.Body>
              <Card.Title>Dessert</Card.Title>
              <NavLink to="/categories/5" className="btn btn-primary">
                Utforska
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="category-card">
            <Card.Img variant="top" src={bread} alt="Bread Category" />
            <Card.Body>
              <Card.Title>Bakat</Card.Title>
              <NavLink to="/categories/6" className="btn btn-primary">
                Utforska
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="category-card">
            <Card.Img variant="top" src={create} alt="Create Category" />
            <Card.Body>
              <Card.Title>Registrera ditt eget recept!</Card.Title>
              <NavLink to="/create" className="btn btn-primary">
                Kör!
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CategorySection;
