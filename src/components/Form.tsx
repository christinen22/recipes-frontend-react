import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { createRecipe, getCategories } from "../services/api";
import { ICategory } from "../types";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Resizer from "react-image-file-resizer";
const Form: React.FC = () => {
  const [formInput, setFormInput] = useState({
    title: "",
    category: "",
    body: "",
    ingredients: [] as string[],
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
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "ingredients") {
      // Convert the single string to an array of strings using line breaks
      const ingredientsArray = value.split("\n");
      setFormInput((prevFormInput) => ({
        ...prevFormInput,
        [name]: ingredientsArray,
      }));
    } else {
      setFormInput((prevFormInput) => ({
        ...prevFormInput,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormInput({
        ...formInput,
        image: e.target.files[0],
      });
    }
  };
  const resizeImage = (file: File): Promise<Blob> => {
    return new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        800,
        800,
        "JPEG",
        80,
        0,
        (resizedImage) => {
          resolve(resizedImage as Blob);
        },
        "blob"
      );
    });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const recipeData = new FormData();
      recipeData.append("title", formInput.title);
      recipeData.append("category", formInput.category);
      recipeData.append("body", formInput.body);

      // Append each ingredient separately
      formInput.ingredients.forEach((ingredient) => {
        recipeData.append("ingredients[]", ingredient);
      });

      if (formInput.image) {
        const resizedImage = await resizeImage(formInput.image);
        recipeData.append("image", resizedImage);
      }
      recipeData.append("category_id", formInput.category_id);

      const createdRecipe = await createRecipe(recipeData);
      console.log(createdRecipe);

      setFormInput({
        title: "",
        category: "",
        body: "",
        ingredients: [] as string[],
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
          <textarea
            className="form-input"
            name="ingredients"
            value={formInput.ingredients.join("\n")}
            onChange={handleChange}
            placeholder="Ingredienser"
          />

          <textarea
            className="form-input"
            name="body"
            value={formInput.body}
            onChange={handleChange}
            placeholder="Gör så här"
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
