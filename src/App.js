import "./App.css";
import {} from "./components";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
