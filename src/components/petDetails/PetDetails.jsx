import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPetData } from '../../api/Api';
import './PetDetails.css';

const PetDetailsPage = () => {
    const { id } = useParams(); // Get pet ID from URL
    const navigate = useNavigate();
    const [pet, setPet] = useState(null);
    const [status, setStatus] = useState("Not Approved"); // Default status

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const pets = await getPetData();
                //const pets = await response.json();
                //const pets = getPetData;
                console.log('pets', pets);
                const selectedPet = pets.filter((p) => p.id === parseInt(id))[0]; // Find pet by ID
                
                console.log('selectedPet', selectedPet);
                if (selectedPet) {
                    setPet(selectedPet);
                    setStatus(selectedPet.Status); // Set initial status
                }
            } catch (error) {
                console.error('Error fetching pet data:', error);
            }
        };
        fetchPet();
    }, [id]);

    if (!pet) {
        return <h2>Loading pet details...</h2>;
    }

    const handleApprove = () => {
        setStatus("Approved"); // Update status
        alert(`You approved adoption for ${pet.name}!`);
    };

    const handleDecline = () => {
        setStatus("Not Approved"); // Reset status
        alert(`You declined adoption for ${pet.name}.`);
    };

    return (
        <div className="pet-details-container">
            <h1>Adoption Approval</h1>
            <img src={pet.image} alt={pet.name} className="pet-image-large" />
            <h2>{pet.name}</h2>
            <p><strong>Type:</strong> {pet.type}</p>
            <p><strong>Breed:</strong> {pet.breed}</p>
            <p><strong>Age:</strong> {pet.age} years</p>
            <p><strong>Size:</strong> {pet.size}</p>
            <p><strong>Location:</strong> {pet.location}</p>
            <p><strong>Description:</strong> {pet.desc}</p>
            <p><strong>Status:</strong> <span className={status === "Approved" ? "approved" : "not-approved"}>{status}</span></p>

            <div className="approval-buttons">
                <button className="approve-btn" onClick={handleApprove} disabled={status === "Approved"}>Approve</button>
                <button className="decline-btn" onClick={handleDecline} disabled={status === "Not Approved"}>Decline</button>
            </div>
        </div>
    );
};

export default PetDetailsPage;
