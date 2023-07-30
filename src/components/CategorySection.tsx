import { Card, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import chicken from "../assets/chicken.jpg";
import beef from "../assets/beef.jpg";
import vegeterian from "../assets/vegeterian.jpg";
import pork from "../assets/pork.jpg";
import desserts from "../assets/dessert.jpg";
import bread from "../assets/bread.jpg";
import breakfast from "../assets/breakfast.jpg";
import houseman from "../assets/houseman.jpg";
import pasta from "../assets/pasta.jpg";
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
              <NavLink to="/categories/1" className="btn btn-primary">
                Kyckling
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="category-card">
            <Card.Img variant="top" src={beef} alt="Beef Category" />
            <Card.Body>
              <NavLink to="/categories/2" className="btn btn-primary">
                Nötkött
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
              <NavLink to="/categories/3" className="btn btn-primary">
                Vegetariskt
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="category-card">
            <Card.Img variant="top" src={pork} alt="Pork Category" />
            <Card.Body>
              <NavLink to="/categories/4" className="btn btn-primary">
                Fläskkött
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="category-card">
            <Card.Img variant="top" src={pasta} alt="Pasta Category" />
            <Card.Body>
              <NavLink to="/categories/9" className="btn btn-primary">
                Pasta
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="category-card">
            <Card.Img variant="top" src={houseman} alt="Houseman Category" />
            <Card.Body>
              <NavLink to="/categories/8" className="btn btn-primary">
                Husmanskost
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="category-card">
            <Card.Img variant="top" src={breakfast} alt="Breakfast Category" />
            <Card.Body>
              <NavLink to="/categories/7" className="btn btn-primary">
                Frukost
              </NavLink>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="category-card">
            <Card.Img variant="top" src={desserts} alt="Dessert Category" />
            <Card.Body>
              <NavLink to="/categories/5" className="btn btn-primary">
                Dessert
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="category-card">
            <Card.Img variant="top" src={bread} alt="Bread Category" />
            <Card.Body>
              <NavLink to="/categories/6" className="btn btn-primary">
                Bakat
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="category-card">
            <Card.Img variant="top" src={create} alt="Create Category" />
            <Card.Body>
              <NavLink to="/create" className="btn btn-primary">
                Skapa ditt egna recept
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CategorySection;
