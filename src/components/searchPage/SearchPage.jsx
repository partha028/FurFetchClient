import React, { useState, useEffect } from 'react';
import SearchPageCard from '../searchPageCard/SearchPageCard';
import { getPetData } from '../../api/Api';
import FilterImg from '../../assets/FilterImg.jpg';
import './SearchPage.css';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [petData, setPetData] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [selectedBreed, setSelectedBreed] = useState('');
    const [selectedAge, setSelectedAge] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const data = await getPetData(); // Fetch data from API
                setPetData(data);
                console.log('pets', petData);
            } catch (error) {
                console.error('Error fetching pet data:', error);
            }
        };
        fetchPets();
    }, []);

    // Filter pet data based on user selection
    const filteredPets = petData.filter((pet) => 
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedBreed === '' || pet.breed === selectedBreed) &&
        (selectedAge === '' || pet.age.toString() === selectedAge) &&
        (selectedSize === '' || pet.size === selectedSize) &&
        (selectedLocation === '' || pet.location === selectedLocation)
    );

    // Get filtered options dynamically
    const getFilteredOptions = (key) => {
        return [...new Set(
            petData
                .filter((pet) =>
                    (selectedSize === '' || pet.size === selectedSize) &&
                    (selectedAge === '' || pet.age.toString() === selectedAge) &&
                    (selectedBreed === '' || pet.breed === selectedBreed) &&
                    (selectedLocation === '' || pet.location === selectedLocation)
                )
                .map((pet) => pet[key])
        )];
    };

    // Clear all filters
    const clearFilters = () => {
        setSelectedSize('');
        setSelectedBreed('');
        setSelectedAge('');
        setSelectedLocation('');
    };

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
                        <label>Size:</label>
                        <select
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            className="filter-dropdown"
                        >
                            <option value="">Select Size</option>
                            {getFilteredOptions('size').map((size, index) => (
                                <option key={index} value={size}>{size}</option>
                            ))}
                        </select>

                        <label>Breed:</label>
                        <select
                            value={selectedBreed}
                            onChange={(e) => setSelectedBreed(e.target.value)}
                            className="filter-dropdown"
                        >
                            <option value="">Select Breed</option>
                            {getFilteredOptions('breed').map((breed, index) => (
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
                            {getFilteredOptions('age').map((age, index) => (
                                <option key={index} value={age}>{age}</option>
                            ))}
                        </select>

                        <label>Location:</label>
                        <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="filter-dropdown"
                        >
                            <option value="">Select Location</option>
                            {getFilteredOptions('location').map((location, index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}
                        </select>

                        {/* Clear Filters Button */}
                        <button onClick={clearFilters} className="clear-filters-btn">
                            Clear Filters
                        </button>
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
