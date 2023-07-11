import { Route, Routes } from "react-router-dom";
import Recipes from "./Recipes";
import SingleRecipe from "./SingleRecipe";
import CategoryRecipes from "./CategoryRecipes";
import Form from "../components/Form";
import CategorySection from "../components/CategorySection";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<CategorySection />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/:id" element={<SingleRecipe />} />
      <Route path="/categories/:id" element={<CategoryRecipes />} />
      <Route path="/create" element={<Form />} />
    </Routes>
  );
};

export default Pages;
