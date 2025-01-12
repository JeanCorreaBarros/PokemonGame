import React from 'react';
import { usePokemon } from '../context/PokemonContext';

function Lobby() {
  const { selectedPokemon } = usePokemon();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Selected Pokémon</h2>
      {selectedPokemon ? (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center space-x-6">
          <img 
            src={selectedPokemon.image} 
            alt={selectedPokemon.name} 
            className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400"
          />
          <div>
            <h3 className="text-2xl font-bold text-white">{selectedPokemon.name}</h3>
            <p className="text-lg text-yellow-400">Type: {selectedPokemon.type}</p>
          </div>
        </div>
      ) : (
        <p className="text-white text-lg">No Pokémon selected. Choose a Pokémon from your roster below.</p>
      )}
    </div>
  );
}

export default Lobby;

