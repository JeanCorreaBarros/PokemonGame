import React from 'react';

function AllPokemon() {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-4">All Pokémon</h2>
      <div className="grid grid-cols-6 gap-4">
        {Array.from({ length: 24 }).map((_, i) => (
          <div 
            key={i}
            className="aspect-square bg-gray-800/50 rounded-lg p-2 cursor-pointer hover:bg-gray-700/50 transition-colors"
          >
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
              <span className="text-white text-opacity-50">#{i + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPokemon;

