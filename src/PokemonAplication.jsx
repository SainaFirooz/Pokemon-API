import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
export default function PokemonApplication() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonInfo, setPokemonInfo] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      });
    fetch("https://pokeapi.co/api/v2/pokemon/1 ").then((response) =>
      response.json(),
    );
  }, []);

  return (
    <div>
      <select
        onChange={(e) => setPokemonData(e.target.value)}
        name="pokemons"
        id="pokemons"
      >
        {pokemon.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.url}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          fetch(pokemonData)
            .then((response) => response.json())
            .then((data) => {
              setPokemonInfo(data);
            });
        }}
      >
        Get Pokemon Data{" "}
      </button>
      {console.log(pokemonInfo.types)}
      {pokemonInfo.sprites && (
        <Pokemon
          image={
            pokemonInfo.sprites.back_default
              ? pokemonInfo.sprites.back_default
              : pokemonInfo.sprites.front_default
          }
          name={pokemonInfo.name.toUpperCase()}
          types={
            pokemonInfo.types &&
            pokemonInfo.types.map((item) => (
              <li key={item.type.name}>{item.type.name.toUpperCase()}</li>
            ))
          }
          weight={pokemonInfo.weight}
          height={pokemonInfo.height}
        />
      )}
    </div>
  );
}

