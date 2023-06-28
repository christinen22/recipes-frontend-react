import { NavLink } from "react-router-dom";
import Form from "../components/Form";

const Homepage = () => {
  return (
    <div>
      <Form />
      <h1>Hey good looking, what you got cooking?</h1>
      <NavLink to="/recipes">Recipes</NavLink>
    </div>
  );
};

export default Homepage;
