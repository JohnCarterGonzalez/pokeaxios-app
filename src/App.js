import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon/')
          .then(response => response.json())
          .then(response => setPokemon(response.results))
  }, []);
  return (
    <div className="App">
      <div>
            {pokemon.length > 0 && pokemon.map((poke, index)=>{
                return (<div key={index}>{poke.name}</div>)
            })}
        </div>
    </div>
  );
}
export default App;
