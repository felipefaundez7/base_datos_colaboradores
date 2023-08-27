import React, { useState } from 'react';

export default function Buscador({ setFilteredColab }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    setFilteredColab(searchTerm);
  };

  return (
    <div>      
      <input
        type="text"
        placeholder="Buscar colaborador..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}
