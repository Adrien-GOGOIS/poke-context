import { useEffect, useState } from "react";

import "./Home.css";

function Home() {
  const [pokemon, setPokemon] = useState({});
  const [number, setNumber] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
        console.log("TYPE", res.types[0].type.name);
      });
  }, [number]);

  const randomNumber = () => {
    return setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div>
      <h1>Home</h1>
      <button type="submit" onClick={randomNumber}>
        RANDOM
      </button>
      <ul className="pokemon">
        <li id="pokemon">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </li>
        <li id="pokemon">{pokemon.weight} cm</li>
        <li id="pokemon">{pokemon.height} kg</li>
        <li>{pokemon.types[0].type.name}</li>
      </ul>
    </div>
  );
}

export default Home;
