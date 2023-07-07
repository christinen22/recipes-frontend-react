import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipesByCategory } from "../services/api";
import { IRecipe } from "../types";
import { useNavigate, NavLink } from "react-router-dom";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

interface RecipeDetails {
  id: string | undefined;
  [key: string]: string | undefined;
}

const CategoryRecipes: React.FC = () => {
  const { id } = useParams<RecipeDetails>();
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await getRecipesByCategory(Number(id));

        console.log(res.recipes);
        setRecipes(res.recipes);
      } catch (error) {
        setError("Failed to fetch recipes");
      }

      setLoading(false);
    };

    fetchRecipes();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {/* <Search onSearch={handleSearch} /> */}

      <div className="recipes">
        <Button type="button" className="btn" onClick={() => navigate(-1)}>
          Tillbaka
        </Button>
        <Container fluid>
          <Row
            xs={1}
            sm={2}
            md={3}
            lg={4}
            xl={5}
            className="justify-content-center"
          >
            {recipes.map((recipe) => (
              <Col key={recipe.id} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={`https://christinensapi.com/${recipe.image}`}
                    alt={recipe.title}
                  />
                  <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <NavLink
                      to={`/recipes/${recipe.id}`}
                      className="btn btn-primary"
                    >
                      Se recept!
                    </NavLink>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CategoryRecipes;
