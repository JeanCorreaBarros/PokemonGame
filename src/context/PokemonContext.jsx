import React, { createContext, useState, useContext } from 'react';

const PokemonContext = createContext();

export const usePokemon = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [capturedPokemon, setCapturedPokemon] = useState([
    { 
      id: 25, 
      name: 'Pikachu', 
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', 
      type: 'electric',
      stats: {
        offense: 4.5,
        endurance: 2.5,
        mobility: 5,
        scoring: 3,
        support: 3
      }
    },
    { 
      id: 4, 
      name: 'Charmander', 
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', 
      type: 'fire',
      stats: {
        offense: 4,
        endurance: 3,
        mobility: 3.5,
        scoring: 3.5,
        support: 2
      }
    },
    { 
      id: 7, 
      name: 'Squirtle', 
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', 
      type: 'water',
      stats: {
        offense: 3.5,
        endurance: 4,
        mobility: 3,
        scoring: 3,
        support: 3.5
      }
    },
    { 
      id: 1, 
      name: 'Bulbasaur', 
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', 
      type: 'grass',
      stats: {
        offense: 3,
        endurance: 4,
        mobility: 3,
        scoring: 3.5,
        support: 4
      }
    },
    { 
      id: 39, 
      name: 'Jigglypuff', 
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png', 
      type: 'normal',
      stats: {
        offense: 2.5,
        endurance: 4,
        mobility: 2,
        scoring: 3,
        support: 5
      }
    }
  ]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const addPokemon = (pokemon) => {
    setCapturedPokemon(prevPokemon => {
      if (prevPokemon.length < 8) {
        return [...prevPokemon, pokemon];
      }
      return prevPokemon;
    });
  };

  const releasePokemon = (id) => {
    setCapturedPokemon(capturedPokemon.filter(p => p.id !== id));
  };

  const selectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <PokemonContext.Provider value={{ 
      capturedPokemon, 
      addPokemon, 
      releasePokemon, 
      selectedPokemon, 
      selectPokemon 
    }}>
      {children}
    </PokemonContext.Provider>
  );
};

