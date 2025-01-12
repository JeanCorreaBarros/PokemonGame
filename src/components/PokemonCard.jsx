import React from 'react';
import { usePokemon } from '../context/PokemonContext';

function PokemonCard({ pokemon }) {
  const { releasePokemon } = usePokemon();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-32 h-32" />
      <h3 className="text-lg font-semibold mt-2">{pokemon.name}</h3>
      <p className="text-sm text-gray-500">{pokemon.types.map(t => t.type.name).join(', ')}</p>
      <button
        onClick={() => releasePokemon(pokemon.id)}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
      >
        Release
      </button>
    </div>
  );
}

export default PokemonCard;

