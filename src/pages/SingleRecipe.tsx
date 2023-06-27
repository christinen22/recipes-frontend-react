import { useState, useEffect } from "react";
import { getRecipe } from "../services/api";
import { Card } from "react-bootstrap";
import { IRecipe } from "../types";
import { useNavigate, useParams } from "react-router-dom";

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

  return (
    <>
      <Card key={recipe?.id} className="singleRecipe">
        <Card.Header className="align-items-center">
          <h3>{recipe?.title}</h3>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Ingredienser:</p>
            <p>Gör så här: {recipe?.body}</p>
            <img src={recipe?.image} alt={recipe?.title} />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {/*button for going back */}
          <button type="button" className="btn" onClick={() => navigate(-1)}>
            Tillbaka
          </button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default SingleRecipe;
