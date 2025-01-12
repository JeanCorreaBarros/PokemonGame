import React, { useState, useEffect } from 'react';
import PokemonList from '../components/PokemonList';

function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState('');

  useEffect(() => {
    fetchPokemon('https://pokeapi.co/api/v2/pokemon');
  }, []);

  const fetchPokemon = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setNextUrl(data.next);
    const pokemonData = await Promise.all(
      data.results.map(async (p) => {
        const res = await fetch(p.url);
        return res.json();
      })
    );
    setPokemon((prevPokemon) => [...prevPokemon, ...pokemonData]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Pokédex</h2>
      <PokemonList pokemon={pokemon} />
      {nextUrl && (
        <button
          onClick={() => fetchPokemon(nextUrl)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Pokedex;

