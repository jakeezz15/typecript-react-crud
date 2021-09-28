import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
