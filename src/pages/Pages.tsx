import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Recipes from "./Recipes";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
};

export default Pages;
