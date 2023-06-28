import { useState, ChangeEvent, FormEvent } from "react";
import { createRecipe } from "../services/api";
import { FormData } from "../types";

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    category: "",
    body: "",
    ingredients: "",
    category_id: "",
    image: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const recipeData = new FormData();
      recipeData.append("title", formData.title);
      recipeData.append("category", formData.category);
      recipeData.append("body", formData.body);
      recipeData.append("ingredients", formData.ingredients);
      recipeData.append("category_id", formData.category_id);
      if (formData.image) {
        recipeData.append("image", formData.image);
      }

      const createdRecipe = await createRecipe(recipeData); // Use the createRecipe service function

      console.log(createdRecipe);
      setFormData({
        title: "",
        category: "",
        body: "",
        ingredients: "",
        category_id: "",
        image: null,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Recept"
      />
      <input
        type="text"
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
        placeholder="Ingredienser"
      />
      <input
        type="text"
        name="body"
        value={formData.body}
        onChange={handleChange}
        placeholder="Gör så här"
      />
      <input type="file" name="image" onChange={handleImageChange} />
      <button type="submit">Lägg till</button>
    </form>
  );
};
export default Form;
