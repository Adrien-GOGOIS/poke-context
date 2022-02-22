import { useEffect, useState } from "react";

import "./Home.css";

function Home() {
  // STATE
  const [pokemon, setPokemon] = useState({});
  const [number, setNumber] = useState(1);

  // Component Did Mount + DidUpdate
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
        console.log("TYPE", res.types[0].type.name);
      });
  }, [number]);

  // Fonction choix ID Pokemon random
  const randomNumber = () => {
    return setNumber(Math.floor(Math.random() * 100) + 1);
  };

  // RENDER DE HOME
  return (
    <div>
      <h1>Home</h1>
      <button type="submit" onClick={randomNumber}>
        RANDOM
      </button>

      <p>Chargement...</p>

      <ul className="pokemon">
        <li className="pokemonlist name">
          {/* J'ai du mettre un GUARD ici sinon erreur de chargement de la page en cas de rafraichissement*/}
          {pokemon.types === undefined ? (
            <p>Chargement...</p>
          ) : (
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          )}
          
        </li>

        <li className="pokemonlist">Weight : {pokemon.weight} hectograms</li>
        <li className="pokemonlist">Height : {pokemon.height} decimeters</li>

        {/* IDEM que plus haut */}
        {pokemon.types === undefined ? (
          <p>Chargement...</p>
        ) : (
          <li>
            Type : {pokemon.types[0].type.name.charAt(0).toUpperCase() +
              pokemon.types[0].type.name.slice(1)}
          </li>
        )}
        {/*  */}
      </ul>
    </div>
  );
}

export default Home;
