import "./App.css";
import { TitleForm } from "./components";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TitleForm />
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default App;
