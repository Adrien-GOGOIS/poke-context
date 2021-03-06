// Fonctions React
import { useEffect, useState, useContext } from "react";

// React-router-dom
import { Link } from "react-router-dom";

// Import context d'App.js :
import { UserContext } from "../App";
import { PokemonContext } from "../App";

// Components
import "./Home.css";

function Home() {
  const userState = useContext(UserContext);
  const pokemonsState = useContext(PokemonContext);

  // STATE
  const [pokemon, setPokemon] = useState({});
  const [number, setNumber] = useState(1);

  // Component Did Mount + DidUpdate
  useEffect(() => {
    // On cherche le pokémon dans le stockage pour voir si on l'a pas déjà stocké, si oui, on l'appelle :
    if (
      pokemonsState.stockedPokemons.find((pokemon) => pokemon.id === number) !==
      undefined
    ) {
      setPokemon(
        pokemonsState.stockedPokemons.find((pokemon) => pokemon.id === number)
      );
    } else {
      // Si le pokémon n'est pas déjà stocké, on requête l'API
      fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
        .then((res) => res.json())
        .then((res) => {
          setPokemon(res);
          pokemonsState.stockedPokemons.push(res);
          // console.log("TOTAL POKEMONS", pokemonsState.stockedPokemons)
        });
    }
  }, [number]);

  // Fonction choix ID Pokemon random
  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };

  // RENDER DE HOME
  return (
    <div>
      <h1>Home</h1>
      {userState.isLogged ? (
        // UTILISATEUR CONNECTE :
        <>
          <button type="submit" onClick={randomNumber}>
            RANDOM
          </button>

          <ul className="pokemon">
            {/* J'ai du mettre un GUARD ici sinon erreur de chargement de la page en cas de rafraichissement*/}
            {pokemon.types === undefined ? (
              <>
                <h2>Loading...</h2>
              </>
            ) : (
              // Affichage du pokémon random
              <>
                <li className="pokemonlist name">
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </li>

                <li className="pokemonlist">
                  Weight : {pokemon.weight} hectograms
                </li>
                <li className="pokemonlist">
                  Height : {pokemon.height} decimeters
                </li>

                <li>
                  Type :{" "}
                  {pokemon.types[0].type.name.charAt(0).toUpperCase() +
                    pokemon.types[0].type.name.slice(1)}
                </li>
              </>
            )}
          </ul>
        </>
      ) : (
        // UTILISATEUR DECONNECTE :

        <Link to={"/login"}>
          <p style={{ color: "white" }}>Please login before...</p>
        </Link>
      )}
    </div>
  );
}

export default Home;
