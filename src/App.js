import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacter(response.results));
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Characters characters={characters} />
    </div>
  );
}

export default App;
