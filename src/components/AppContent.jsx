import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Zap, Flame, Droplet, Leaf, Star } from 'lucide-react';
import Header from './Header';
import Lobby from '../pages/Lobby';
import Pokedex from '../pages/Pokedex';
import Battle from '../pages/Battle';
import Inventory from '../pages/Inventory';
import Login from '../pages/Login';
import PokemonSelect from '../pages/PokemonSelect';
import AllPokemon from '../pages/AllPokemon';
import MoveDescriptions from '../pages/MoveDescriptions';
import { usePokemon } from '../context/PokemonContext';

function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center gap-8 mt-4 text-white text-sm">
      <button 
        onClick={() => navigate('/select')} 
        className="hover:text-yellow-400 transition-colors"
      >
        Select
      </button>
      <button 
        onClick={() => navigate('/all-pokemon')} 
        className="hover:text-yellow-400 transition-colors"
      >
        All Pokémon
      </button>
      <button 
        onClick={() => navigate('/moves')} 
        className="hover:text-yellow-400 transition-colors"
      >
        Move Descriptions
      </button>
      <button 
        onClick={() => navigate(-1)} 
        className="hover:text-yellow-400 transition-colors"
      >
        Back
      </button>
    </div>
  );
}

function PokemonRoster() {
  const { capturedPokemon, selectPokemon, selectedPokemon } = usePokemon();
  const navigate = useNavigate();

  const handlePokemonClick = (pokemon) => {
    selectPokemon(pokemon);
    navigate('/');
  };

  const rosterSlots = Array(8).fill(null).map((_, index) => capturedPokemon[index] || null);

  return (
    <div className="bg-gray-800/50 p-4">
      <div className="flex gap-2 justify-center">
        {rosterSlots.map((pokemon, index) => (
          <div
            key={index}
            className={`w-16 h-16 rounded-lg ${
              pokemon
                ? 'bg-gradient-to-br from-orange-400 to-red-600'
                : 'bg-gray-600'
            } border-2 ${
              selectedPokemon && pokemon && selectedPokemon.id === pokemon.id
                ? 'border-blue-400'
                : 'border-yellow-400'
            } ${
              pokemon ? 'cursor-pointer hover:scale-105' : ''
            } transition-transform overflow-hidden`}
            onClick={() => pokemon && handlePokemonClick(pokemon)}
          >
            {pokemon && (
              <img src={pokemon.image} alt={pokemon.name} className="w-full h-full object-cover" />
            )}
          </div>
        ))}
      </div>
      <NavigationButtons />
    </div>
  );
}

function Sidebar() {
  const { selectedPokemon } = usePokemon();

  const typeIcons = {
    electric: <Zap className="w-6 h-6" />,
    fire: <Flame className="w-6 h-6" />,
    water: <Droplet className="w-6 h-6" />,
    grass: <Leaf className="w-6 h-6" />,
    normal: <Star className="w-6 h-6" />,
  };

  const defaultIcon = <Star className="w-6 h-6" />;

  const renderTypeIcon = (type) => {
    return (
      <div className={`w-12 h-12 rounded-full ${selectedPokemon && selectedPokemon.type === type ? 'bg-yellow-400' : 'bg-gray-600'} flex items-center justify-center`}>
        {typeIcons[type] || defaultIcon}
      </div>
    );
  };

  return (
    <div className="w-20 bg-gray-800/50 flex flex-col items-center py-4 gap-4">
      {renderTypeIcon('electric')}
      {renderTypeIcon('fire')}
      {renderTypeIcon('water')}
      {renderTypeIcon('grass')}
      {renderTypeIcon('normal')}
    </div>
  );
}

function StatBar({ label, value }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`text-lg ${
                i < Math.floor(value)
                  ? 'text-yellow-400'
                  : i < value
                  ? 'text-yellow-400/50'
                  : 'text-gray-300'
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  const { selectedPokemon } = usePokemon();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      
      <div className="bg-gray-800/50 text-white p-2 flex justify-end gap-4">
        <div className="flex items-center gap-2">
          <span className="text-yellow-400">🪙</span>
          <span>3,980</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-400">🎫</span>
          <span>750</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-purple-400">💎</span>
          <span>0</span>
        </div>
      </div>

      <div className="flex min-h-[calc(100vh-40px)]">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Lobby />} />
              <Route path="/pokedex" element={<Pokedex />} />
              <Route path="/battle" element={<Battle />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/login" element={<Login />} />
              <Route path="/select" element={<PokemonSelect />} />
              <Route path="/all-pokemon" element={<AllPokemon />} />
              <Route path="/moves" element={<MoveDescriptions />} />
            </Routes>
          </main>

          <PokemonRoster />
        </div>

        <div className="w-64 bg-white/10 backdrop-blur p-4">
          <div className="bg-yellow-400/90 rounded-t-lg p-2 text-center font-bold">
            Overview
          </div>
          <div className="bg-white/90 rounded-b-lg p-4 space-y-4">
            {selectedPokemon ? (
              <>
                <StatBar label="Offense" value={selectedPokemon.stats.offense} />
                <StatBar label="Endurance" value={selectedPokemon.stats.endurance} />
                <StatBar label="Mobility" value={selectedPokemon.stats.mobility} />
                <StatBar label="Scoring" value={selectedPokemon.stats.scoring} />
                <StatBar label="Support" value={selectedPokemon.stats.support} />
              </>
            ) : (
              <p className="text-center text-gray-500">Select a Pokémon to view stats</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppContent;

