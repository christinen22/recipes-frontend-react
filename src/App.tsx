import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Pages from "./pages/Pages";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
