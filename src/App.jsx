import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
                                          name: "",
                                          number: "",
                                          species: "",
                                          image: "",
                                          hp: "",
                                          attack: "",
                                          defense: "",
                                          speed: "",
                                          type: "",
                                          height: "",
                                          weight: "",
                                        });

  const searchPokemon = () => {axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                          .then((res) => {setPokemon({
                                          name: pokemonName,
                                          number: res.data.id,
                                          species: res.data.species.name,
                                          image: res.data.sprites.front_default,
                                          hp: res.data.stats[0].base_stat,
                                          attack: res.data.stats[1].base_stat,
                                          defense: res.data.stats[2].base_stat,
                                          speed: res.data.stats[5].base_stat,
                                          type: res.data.types[0].type.name,
                                          height: res.data.height,
                                          weight: res.data.weight,
                                        });
                                        setPokemonChosen(true);
                                })};
  


return (
  
  <div className="App">
    <div className="TitleSection">
      <h1>Pokédex</h1>
      <input
type="text"
onChange={(event) => {
setPokemonName(event.target.value);
}}
/>
<button onClick={searchPokemon}>Search Pokémon</button>

      {/* <div>
        {pokemonName && <button onClick={searchPokemon}>Search Pokémon</button>}
      </div> */}
    
      <div className="DisplaySection">
        {!pokemonChosen ? (<h2> Please choose a Pokémon</h2>) 
                        : (
                          <>
                            <h2>{pokemon.name}</h2>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <h3>Number: #{pokemon.number}</h3>
                            <h3>Species: {pokemon.species}</h3>
                            <h3>Type: {pokemon.type}</h3>
                            <h4>Hp: {pokemon.hp}</h4>
                            <h4>Attack: {pokemon.attack}</h4>
                            <h4>Defense: {pokemon.defense}</h4>
                            <h4>Speed: {pokemon.speed}</h4>
                            <h4>Height: {pokemon.height/10}</h4>
                            <h4>Weight: {pokemon.weight/10}</h4>
                          </>
                        )}
      </div>
    </div>
  </div>
  
)
};

export default App;
