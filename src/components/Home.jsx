import { useEffect, useState } from "react";

function Home() {
  const [pokemon, setPokemon] = useState({});
  const [number, setNumber] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
      });
  }, [number]);

  const randomNumber = () => {
    return setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={randomNumber}>RANDOM</button>
      <ul>
        <li>{pokemon.name}</li>
        <li>{pokemon.weight} cm</li>
        <li>{pokemon.height} kg</li>
        {/* <li>{pokemon.types.type.name}</li> */}
      </ul>
    </div>
  );
}

export default Home;
