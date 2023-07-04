import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { createRecipe, getCategories } from "../services/api";
import { ICategory } from "../types";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Form: React.FC = () => {
  const [formInput, setFormInput] = useState({
    title: "",
    category: "",
    body: "",
    ingredients: "",
    image: null as File | null,
    category_id: "",
  });
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        console.log(response);

        setCategories(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormInput({
        ...formInput,
        image: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const recipeData = new FormData();
      recipeData.append("title", formInput.title);
      recipeData.append("category", formInput.category);
      recipeData.append("body", formInput.body);
      recipeData.append("ingredients", JSON.stringify(formInput.ingredients));
      if (formInput.image) {
        recipeData.append("image", formInput.image);
      }
      recipeData.append("category_id", formInput.category_id);

      const createdRecipe = await createRecipe(recipeData);

      console.log(createdRecipe);
      setFormInput({
        title: "",
        category: "",
        body: "",
        ingredients: "",
        image: null,
        category_id: "",
      });
      setShowConfirmation(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Tillbaka
      </button>
      <div className="form-header">
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="text"
            name="title"
            value={formInput.title}
            onChange={handleChange}
            placeholder="Recept"
          />
          <select
            className="form-input"
            name="category_id"
            value={formInput.category_id}
            onChange={handleChange}
          >
            <option value="">Välj kategori</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            className="form-input"
            type="text"
            name="ingredients"
            value={formInput.ingredients}
            onChange={handleChange}
            placeholder="Ingredienser"
          />
          <input
            className="form-input"
            type="text"
            name="body"
            value={formInput.body}
            onChange={handleChange}
            placeholder="Gör så här"
          />

          <input
            className="form-input"
            type="file"
            name="image"
            onChange={handleImageChange}
          />
          <button className="btn" type="submit">
            Lägg till
          </button>
        </form>
        {showConfirmation && (
          <Alert
            className="form-alert"
            variant="success"
            onClose={() => setShowConfirmation(false)}
            dismissible
          >
            Ditt recept är tillagt!
          </Alert>
        )}
      </div>
    </>
  );
};

export default Form;
