import React from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  // Function to get the title based on the current route
  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Pokemon Game Pixel Art';
      case '/pokedex':
        return 'Pokédex';
      case '/battle':
        return 'Battle';
      case '/inventory':
        return 'Inventory';
      case '/login':
        return 'Login';
      case '/select':
        return 'Select Pokémon';
      case '/all-pokemon':
        return 'All Pokémon';
      case '/moves':
        return 'Move Descriptions';
      default:
        return 'Pokémon App';
    }
  };

  return (
    <header className="bg-yellow-400 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold text-blue-600">{getTitle()}</h1>
      </div>
    </header>
  );
}

export default Header;

