import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { createRecipe, getCategories } from "../services/api";
import { ICategory } from "../types";

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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formInput.title}
        onChange={handleChange}
        placeholder="Recept"
      />
      <select
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
        type="text"
        name="ingredients"
        value={formInput.ingredients}
        onChange={handleChange}
        placeholder="Ingredienser"
      />
      <input
        type="text"
        name="body"
        value={formInput.body}
        onChange={handleChange}
        placeholder="Gör så här"
      />

      <input type="file" name="image" onChange={handleImageChange} />
      <button type="submit">Lägg till</button>
    </form>
  );
};

export default Form;
