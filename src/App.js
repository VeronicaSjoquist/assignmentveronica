import "./App.css";
import {} from "./components";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="FpHeader">Welcome to my site!</div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default App;
