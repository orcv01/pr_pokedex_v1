import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonSearch = () => {
  const [name, setName] = useState("");
  const [pokemons, setPokemons] = useState([]);
  
  const pokeCarga = async () => {
    const response = await 
    axios.get(`https://pokeapi.co/api/v2/pokemon/?name=${name}`);
    setPokemons(response.data.results);
  };

  return (
  <div className="App">
    <div className="TitleSection">
      <h1>Pokédex</h1>
      <div>
        <input
          type="text"
          placeholder="Nombre del Pokémon"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          {name && <button onClick={pokeCarga}>Buscar</button>}
        </div>
        <div className="DisplaySection">
        
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.image} alt={pokemon.name} />
              <h3>Number: #{pokemon.number}</h3>
              <h3>Species: {pokemon.species}</h3>
              <h3>Type: {pokemon.type}</h3>
              <h4>Hp: {pokemon.hp}</h4>
              <h4>Attack: {pokemon.attack}</h4>
              <h4>Defense: {pokemon.defense}</h4>
              <h4>Speed: {pokemon.speed}</h4>
            </li>
          ))}
        </ul>
        
        </div>
      </div>
    </div>
  </div>
  );
}

export default PokemonSearch;
