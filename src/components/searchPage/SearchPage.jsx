import React, { useState, useEffect } from 'react';
import SearchPageCard from '../searchPageCard/SearchPageCard';
import { getPetData } from '../../api/Api';
import './SearchPage.css';
  
  
const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');
    const [petData, setPetData] = useState([]);
  
    // Fetch pet data inside useEffect
    useEffect(() => {
      const fetchPets = () => {
        const data = getPetData();
        setPetData(data);
      };
      fetchPets();
    }, []);
  
    // Get unique pet types dynamically
    const uniquePetTypes = ['All', ...new Set(petData.map((pet) => pet.type))];
  
    const filteredPets = petData.filter((pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === '' || filter === 'All' || pet.type === filter)
    );
  
    return (
      <div className="search-page">
        <h1>Find Your Pet</h1>
  
        <div className="search-filter-container">
          <input
            type="text"
            placeholder="Search pets by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
  
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-dropdown"
          >
            {uniquePetTypes.map((type, index) => (
              <option key={index} value={type === 'All' ? '' : type}>
                {type}
              </option>
            ))}
          </select>
        </div>
  
        <div className="pet-list">
          {filteredPets.map((pet) => (
            <SearchPageCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    );
  };
  
  export default SearchPage;