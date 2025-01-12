import React from 'react';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemon }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemon.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </div>
  );
}

export default PokemonList;

