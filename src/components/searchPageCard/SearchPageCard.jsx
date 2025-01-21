import React from 'react';
import './SearchPageCard.css';

const SearchPageCard = ({ pet }) => {
    return (
        <div className="pet-card">
          <img src={pet.image} alt={pet.name} className="pet-image" />
          <h3>{pet.name}</h3>
          <p>Type: {pet.type}</p>
        </div>
      );
};

export default SearchPageCard;
