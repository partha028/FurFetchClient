import React from 'react';
import { Link } from "react-router-dom";
import './SearchPageCard.css';


const SearchPageCard = ({ pet }) => {
    return (
        <div className="pet-card">
          <Link to={`/search/${pet.id}`}>
            <img src={pet.image} alt={pet.name} className="pet-image" />
          </Link>
          <h3>{pet.name}</h3>
          <p>{pet.desc}</p>
        </div>
    );
};

export default SearchPageCard;
