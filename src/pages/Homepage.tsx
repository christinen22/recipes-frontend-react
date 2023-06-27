import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1>Hey good looking, what you got cooking?</h1>
      <NavLink to="/recipes">Recipes</NavLink>
    </div>
  );
};

export default Homepage;
