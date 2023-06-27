import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Recipes from "./Recipes";
import SingleRecipe from "./SingleRecipe";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/:id" element={<SingleRecipe />} />
    </Routes>
  );
};

export default Pages;
