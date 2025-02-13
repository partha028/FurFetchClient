import React, { useState, useEffect } from 'react';
import { getPetData, updatePet, addPet, deletePetApi } from '../../api/Api'; // Import APIs
import "./PetManagement.css";

const PetManagement = () => {
  const [pets, setPets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPet, setEditingPet] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5); // Default page size

  const [newPet, setNewPet] = useState({
    id: 0,
    name: "",
    type: "",
    description: "",
    image: "", // Only stores image name
    breed: "",
    age: "",
    size: "",
    location: "",
    status: ""
  });

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const data = await getPetData();
        setPets(data);
      } catch (error) {
        console.error('Error fetching pet data:', error);
      }
    };
    fetchPets();
  }, []);

  const handleChange = (e) => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value });
  };

  const addOrUpdatePet = async () => {
    try {
      if (editingPet) {
        // Update existing pet
        await updatePet(newPet);
        setPets(pets.map((pet) => (pet.id === editingPet.id ? { ...newPet } : pet)));
      } else {
        // Add new pet
        const pet = newPet;
        pet.image = newPet.name;
        pet.status = 'Not Approved';
        const addedPet = await addPet(pet);
        setPets([...pets, addedPet]);
      }
      // Reset form
      setNewPet({ id: "", name: "", type: "", description: "", image: "", breed: "", age: "", size: "", location: "" });
      setEditingPet(null);
      setShowForm(false);
      window.location.reload();
    } catch (error) {
      console.error("Error adding/updating pet:", error);
    }
  };

  const deletePet = async (id) => {
    try {
      await deletePetApi(id);
      setPets(pets.filter((pet) => pet.id !== id));
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  const editPet = (pet) => {
    setNewPet(pet);
    setEditingPet(pet);
    setShowForm(true);
  };

  const indexOfLastPet = currentPage * pageSize;
  const indexOfFirstPet = indexOfLastPet - pageSize;
  const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPet({ ...newPet, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }
  const totalPages = Math.ceil(pets.length / pageSize);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div id="pet-management-container">
      <h2>Pet Management</h2>
      <div className='pet-management-header'>
        <button className="small-btn add-pet-btn" onClick={() => setShowForm(true)}>Add Pet</button>
        <div className="page-size-selector">
          <label htmlFor="pageSize">Items per page:</label>
          <select id="pageSize" value={pageSize} onChange={handlePageSizeChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>
      
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h3>{editingPet ? "Update Pet" : "Add Pet"}</h3>
            <input name="name" placeholder="Name" value={newPet.name} required onChange={handleChange} />
            <input name="type" placeholder="Type" value={newPet.type} onChange={handleChange} />
            <input name="description" placeholder="Description" value={newPet.description} onChange={handleChange} />
            <input name="breed" placeholder="Breed" value={newPet.breed} onChange={handleChange} />
            <input name="age" type="number" placeholder="Age" value={newPet.age} onChange={handleChange} />
            <input name="size" placeholder="Size" value={newPet.size} onChange={handleChange} />
            <input name="location" placeholder="Location" value={newPet.location} onChange={handleChange} />
            <input type="file" onChange={handleImageUpload} />
            {newPet.image && <img src={newPet.image} alt="Pet" className="pet-image-preview" />}
            <button className="small-btn" onClick={addOrUpdatePet}>{editingPet ? "Update Pet" : "Add Pet"}</button>
            <button className="small-btn" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}
      
      <ul id="pet-list">
        {currentPets.map((pet) => (
          <li key={pet.id} className="pet-item">
            <div className='pet-card-items'>
              <img src={`${pet.image}`} alt={pet.name} className="pet-image" />
              <p><strong>{pet.name}</strong> - {pet.type} ({pet.breed}) - {pet.age} years old</p>
            </div>
            <div>
              <button className="small-btn" onClick={() => deletePet(pet.id)}>Delete</button>
              <button className="small-btn" onClick={() => editPet(pet)}>Update</button>
            </div>
          </li>
        ))}
      </ul>
      
      <div className="pagination">
        <button className="small-btn" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            className={`page-number ${currentPage === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </button>
        ))}
        <button className="small-btn" onClick={nextPage} disabled={currentPage >= totalPages}>Next</button>
      </div>
    </div>
  );
};

export default PetManagement;
