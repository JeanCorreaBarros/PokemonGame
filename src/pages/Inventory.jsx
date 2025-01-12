import React from 'react';

function Inventory() {
  // Placeholder items for the inventory
  const inventoryItems = [
    { id: 1, name: 'Poké Ball', quantity: 10 },
    { id: 2, name: 'Super Potion', quantity: 5 },
    { id: 3, name: 'Revive', quantity: 3 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Tu Inventario</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        {inventoryItems.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {inventoryItems.map((item) => (
              <li key={item.id} className="py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img 
                    src="/placeholder.svg?height=50&width=50" 
                    alt={item.name} 
                    className="w-10 h-10 mr-3"
                  />
                  <span className="text-lg font-medium text-gray-900">{item.name}</span>
                </div>
                <span className="text-gray-600">Cantidad: {item.quantity}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Tu inventario está vacío.</p>
        )}
      </div>
    </div>
  );
}

export default Inventory;

