import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ to, children }) => (
  <Link 
    to={to} 
    className="block py-2 px-4 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white transition duration-200"
  >
    {children}
  </Link>
);

function Menu() {
  return (
    <nav className="bg-white w-64 h-full shadow-lg">
      <div className="px-4 py-5 flex items-center justify-center">
        <h1 className="text-xl font-semibold text-gray-800">Pokémon App</h1>
      </div>
      <div className="mt-5">
        <MenuItem to="/">Lobby</MenuItem>
        <MenuItem to="/pokedex">Pokédex</MenuItem>
        <MenuItem to="/battle">Battle</MenuItem>
        <MenuItem to="/inventory">Inventory</MenuItem>
        <MenuItem to="/login">Cerrar sesión</MenuItem>
      </div>
    </nav>
  );
}

export default Menu;

