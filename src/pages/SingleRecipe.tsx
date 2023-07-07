import { useState, useEffect } from "react";
import { getRecipe } from "../services/api";
import { Card, Col, Container, Button } from "react-bootstrap";
import { IRecipe } from "../types";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";

interface RecipeDetails {
  id: string | undefined;
  [key: string]: string | undefined;
}

const SingleRecipe: React.FC = () => {
  const { id } = useParams<RecipeDetails>();
  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingleRecipe = async () => {
      try {
        setLoading(true);
        if (id) {
          const recipeData = await getRecipe(Number(id));
          setRecipe(recipeData);
        }
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setIsError(true);
        setLoading(false);
      }
    };
    fetchSingleRecipe();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={error || ""} />;
  }

  return (
    <>
      <Container>
        <Col>
          <Card className="recipeCard">
            <Card.Header className="align-items-center">
              <h3>{recipe?.title}</h3>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p>Ingredienser: {recipe?.ingredients}</p>
                <p>Gör så här: {recipe?.body}</p>
                <Button
                  type="button"
                  className="btn"
                  onClick={() => navigate(-1)}
                >
                  Tillbaka
                </Button>
              </Card.Text>
              <Card.Img
                src={`https://christinensapi.com/${recipe?.image}`}
                alt={recipe?.title}
              />
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </>
  );
};

export default SingleRecipe;
