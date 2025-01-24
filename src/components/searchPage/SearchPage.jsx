import React, { useState, useEffect } from 'react';
import SearchPageCard from '../searchPageCard/SearchPageCard';
import { getPetData } from '../../api/Api';
import FilterImg from '../../assets/FilterImg.jpg';
import './SearchPage.css';
  
  
const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');
    const [petData, setPetData] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [selectedBreed, setSelectedBreed] = useState('');
    const [selectedAge, setSelectedAge] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const breedOptions = ['Labrador', 'Poodle', 'Beagle', 'Bulldog'];
    const ageOptions = ['Puppy', 'Adult', 'Senior'];
    const sizeOptions = ['Small', 'Medium', 'Large'];
    const locationOptions = ['New York', 'Los Angeles', 'Chicago', 'Houston'];

  
    // Fetch pet data inside useEffect
    useEffect(() => {
      const fetchPets = () => {
        const data = getPetData();
        setPetData(data);
        console.log('petdata', data)
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
       
  
        <div className="search-filter-container">
          <h1>Explore</h1>
          <input
            type="text"
            placeholder="Search pets by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
  
        <div className={`filter-section ${showFilters ? 'open' : ''}`}>
        <div className="filter-header" onClick={() => setShowFilters(!showFilters)}>
          Filter <span>{showFilters ? '−' : '+'}</span>
        </div>
        <img src={FilterImg} alt="Filter Icon" className="filter-icon" />

        <div className="filter-options">
          <label>Breed:</label>
          <select 
            value={selectedBreed} 
            onChange={(e) => setSelectedBreed(e.target.value)} 
            className="filter-dropdown"
          >
            <option value="">Select Breed</option>
            {breedOptions.map((breed, index) => (
              <option key={index} value={breed}>{breed}</option>
            ))}
          </select>

          <label>Age:</label>
          <select 
            value={selectedAge} 
            onChange={(e) => setSelectedAge(e.target.value)} 
            className="filter-dropdown"
          >
            <option value="">Select Age</option>
            {ageOptions.map((age, index) => (
              <option key={index} value={age}>{age}</option>
            ))}
          </select>

          <label>Size:</label>
          <select 
            value={selectedSize} 
            onChange={(e) => setSelectedSize(e.target.value)} 
            className="filter-dropdown"
          >
            <option value="">Select Size</option>
            {sizeOptions.map((size, index) => (
              <option key={index} value={size}>{size}</option>
            ))}
          </select>

          <label>Location:</label>
          <select 
            value={selectedLocation} 
            onChange={(e) => setSelectedLocation(e.target.value)} 
            className="filter-dropdown"
          >
            <option value="">Select Location</option>
            {locationOptions.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>
      </div>

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