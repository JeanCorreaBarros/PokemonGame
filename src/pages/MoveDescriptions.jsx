import React from 'react';

function MoveDescriptions() {
  const moves = [
    { name: 'Thunder Shock', type: 'Electric', power: 40 },
    { name: 'Quick Attack', type: 'Normal', power: 30 },
    { name: 'Electro Ball', type: 'Electric', power: 60 },
    { name: 'Iron Tail', type: 'Steel', power: 100 },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Move Descriptions</h2>
      <div className="space-y-4">
        {moves.map((move, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-yellow-400">{move.name}</h3>
            <div className="flex justify-between text-white mt-2">
              <span>Type: {move.type}</span>
              <span>Power: {move.power}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoveDescriptions;


