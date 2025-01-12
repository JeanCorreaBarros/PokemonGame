import React from 'react';

function Battle() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Battle Arena</h2>
        <p className="text-xl text-gray-700">¡Prepara tu equipo para la batalla!</p>
        <div className="mt-8">
          <img 
            src="/placeholder.svg?height=200&width=200" 
            alt="Battle Arena" 
            className="mx-auto"
          />
        </div>
        <button className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Iniciar Batalla
        </button>
      </div>
    </div>
  );
}

export default Battle;

