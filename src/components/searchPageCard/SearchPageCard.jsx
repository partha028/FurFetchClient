import React from 'react';
import { Link } from "react-router-dom";
import './SearchPageCard.css';


const SearchPageCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} className="pet-image" />
      <h3>{pet.name}</h3>
      <p>{pet.description}</p>
      <button className="pet-button" onClick={() => window.location.href=`/search/${pet.id}`}>
        →
      </button>
    </div>
  );
};

export default SearchPageCard;
