import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Recipes from "./Recipes";
import SingleRecipe from "./SingleRecipe";
import CategoryRecipes from "./CategoryRecipes";
import Form from "../components/Form";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/:id" element={<SingleRecipe />} />
      <Route path="/categories/:id" element={<CategoryRecipes />} />
      <Route path="/create" element={<Form />} />
    </Routes>
  );
};

export default Pages;
