import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPetById, updatePet } from '../../api/Api'; // Import updatePet
import './PetDetails.css';

const PetDetailsPage = () => {
    const { id } = useParams(); // Get pet ID from URL
    const navigate = useNavigate();
    const [pet, setPet] = useState(null);
    const [status, setStatus] = useState("Not Approved"); // Default status

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const petData = await getPetById(id);
                console.log('petData', petData);
                if (petData) {
                    setPet(petData);
                    setStatus(petData.status); // Set initial status
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

    const handleUpdateStatus = async (newStatus) => {
        try {
            const updatedPet = { ...pet, status: newStatus }; // Update status
            const response = await updatePet(updatedPet); // Call API
            setPet(response); // Update state with response
            setStatus(response.status);
            alert(`You ${newStatus === "Approved" ? "approved" : "declined"} adoption for ${pet.name}!`);
            window.location.reload();
        } catch (error) {
            console.error('Error updating pet status:', error);
        }
    };

    return (
        <div className="pet-details-container">
            <h1>Adoption Approval</h1>
            <img src={pet.image} alt={pet.name} className="pet-image-large" />
            <h2>{pet.name}</h2>

            {/* Details Section */}
            <div className="pet-details">
                <div><span>Type:</span><span>{pet.type}</span></div>
                <div><span>Breed:</span><span>{pet.breed}</span></div>
                <div><span>Age:</span><span>{pet.age} years</span></div>
                <div><span>Size:</span><span>{pet.size}</span></div>
                <div><span>Location:</span><span>{pet.location}</span></div>
                <div><span>Description:</span><span>{pet.description}</span></div>
                <div>
                    <span>Status:</span>
                    <span className={status === "Approved" ? "approved" : "not-approved"}>{status}</span>
                </div>
            </div>

            {/* Approval/Decline Buttons */}
            <div className="approval-buttons">
                <button className="approve-btn" onClick={() => handleUpdateStatus("Approved")} disabled={status === "Approved"}>Approve</button>
                <button className="decline-btn" onClick={() => handleUpdateStatus("Not Approved")} disabled={status === "Not Approved"}>Decline</button>
            </div>
        </div>
    );
};

export default PetDetailsPage;
