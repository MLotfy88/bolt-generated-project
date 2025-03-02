import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

function Supplies({ supplies, setSupplies }) {
  const [newSupply, setNewSupply] = useState({
    id: '',
    name: '',
    type: '',
    quantity: '',
    manufacturer: '',
    batchNumber: '',
    productionDate: '',
    expirationDate: '',
    image: ''
  });

  const handleAddSupply = () => {
    const supply = {
      ...newSupply,
      id: uuidv4()
    };
    setSupplies([...supplies, supply]);
    setNewSupply({
      id: '',
      name: '',
      type: '',
      quantity: '',
      manufacturer: '',
      batchNumber: '',
      productionDate: '',
      expirationDate: '',
      image: ''
    });
  };

  const handleDeleteSupply = (id) => {
    setSupplies(supplies.filter(supply => supply.id !== id));
  };

  return (
    <div>
      <h1>Supplies Management</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newSupply.name}
          onChange={(e) => setNewSupply({ ...newSupply, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Type"
          value={newSupply.type}
          onChange={(e) => setNewSupply({ ...newSupply, type: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newSupply.quantity}
          onChange={(e) => setNewSupply({ ...newSupply, quantity: e.target.value })}
        />
        <input
          type="text"
          placeholder="Manufacturer"
          value={newSupply.manufacturer}
          onChange={(e) => setNewSupply({ ...newSupply, manufacturer: e.target.value })}
        />
        <input
          type="text"
          placeholder="Batch Number"
          value={newSupply.batchNumber}
          onChange={(e) => setNewSupply({ ...newSupply, batchNumber: e.target.value })}
        />
        <input
          type="date"
          placeholder="Production Date"
          value={newSupply.productionDate}
          onChange={(e) => setNewSupply({ ...newSupply, productionDate: e.target.value })}
        />
        <input
          type="date"
          placeholder="Expiration Date"
          value={newSupply.expirationDate}
          onChange={(e) => setNewSupply({ ...newSupply, expirationDate: e.target.value })}
        />
        <button onClick={handleAddSupply}>Add Supply</button>
      </div>
      <ul>
        {supplies.map(supply => (
          <li key={supply.id}>
            <h3>{supply.name}</h3>
            <p>Type: {supply.type}</p>
            <p>Quantity: {supply.quantity}</p>
            <p>Manufacturer: {supply.manufacturer}</p>
            <p>Batch Number: {supply.batchNumber}</p>
            <p>Production Date: {format(new Date(supply.productionDate), 'yyyy-MM-dd')}</p>
            <p>Expiration Date: {format(new Date(supply.expirationDate), 'yyyy-MM-dd')}</p>
            <button onClick={() => handleDeleteSupply(supply.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Supplies;
