import Buddy from '../assets/dog1.webp';
import Charlie from '../assets/dog2.webp';
import Bella from '../assets/dog3.webp';
import Max from '../assets/dog4.jpg';
import Rocky from '../assets/dog5.jpg';
import Daisy from '../assets/dog6.jpg';
import Luna from '../assets/cat1.jpg';
import Mittens from '../assets/cat2.jpg';
import Simba from '../assets/cat3.jpg';
import Cleo from '../assets/cat4.jpg';
import Thumper from '../assets/bun1.jpg';
import Cocoa from '../assets/bun2.jpg';
import Jackie from '../assets/dog7.jpg'
import axios from 'axios';

const URL = 'https://localhost:7192';

const imageMap = {
  'Buddy': Buddy,
  'Charlie': Charlie,
  'Bella': Bella,
  'Max': Max,
  'Rocky': Rocky,
  'Daisy': Daisy,
  'Luna': Luna,
  'Mittens': Mittens,
  'Simba': Simba,
  'Cleo': Cleo,
  'Thumper': Thumper,
  'Cocoa': Cocoa,
  'Jackie': Jackie
};

export const getPetData = async () => {
  try {
    const response = await axios.get(`${URL}/api/Pets`);
    console.log('response', response);

    // Map the image field to the actual imported image
    const updatedData = response.data.map(pet => ({
      ...pet,
      image: imageMap[pet.image] || pet.image // Default to original string if not found
    }));

    return updatedData;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error;
  }
};

export const getPetById = async (id) => {
  try {
    const response = await axios.get(`${URL}/api/Pets/${id}`);
    const updatedPet = {
      ...response.data,
      image: imageMap[response.data.image] || response.data.image // Default to original string if not found
    };

    return updatedPet;
  } catch (error) {
    console.error("Error fetching pet:", error);
    throw error;
  }
};

export const updatePet = async (updatedPet) => {
  try {
    const response = await axios.put(`${URL}/api/Pets/updatePets/${updatedPet.id}`, updatedPet, {
      headers: { 'Content-Type': 'application/json' },
      image: updatedPet.name
    });
    console.log('Updated pet response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating pet:', error);
    throw error;
  }
};

export const addPet = async (newPet) => {
  try {
    const response = await axios.post(`${URL}/api/Pets/addPets`, newPet, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error("Error adding pet:", error);
    throw error;
  }
};

export const deletePetApi = async (id) => {
  try {
    await axios.delete(`${URL}/api/Pets/deletePets/${id}`);
  } catch (error) {
    console.error("Error deleting pet:", error);
    throw error;
  }
};

// export const getPetData = () => {
//     return [
//       { "id": 1, "name": "Buddy", "type": "Dog", "description": "A playful and energetic dog who loves to fetch and run around the park.", "image": Buddy, "breed": "Golden Retriever", "age": 3, "size": "Large", "location": "New York, NY" },
//       { "id": 2, "name": "Charlie", "type": "Dog", "description": "A friendly companion who enjoys long walks and belly rubs.", "image": Charlie, "breed": "Labrador Retriever", "age": 4, "size": "Large", "location": "Los Angeles, CA" },
//       { "id": 3, "name": "Bella", "type": "Dog", "description": "A curious and adventurous pup always ready to explore new places.", "image": Bella, "breed": "Beagle", "age": 2, "size": "Medium", "location": "Chicago, IL" },
//       { "id": 4, "name": "Max", "type": "Dog", "description": "A loyal and protective dog who loves being around people.", "image": Max, "breed": "German Shepherd", "age": 5, "size": "Large", "location": "Houston, TX" },
//       { "id": 5, "name": "Rocky", "type": "Dog", "description": "A fun-loving pup with an endless supply of energy and excitement.", "image": Rocky, "breed": "Boxer", "age": 3, "size": "Medium", "location": "Phoenix, AZ" },
//       { "id": 6, "name": "Daisy", "type": "Dog", "description": "A gentle soul who enjoys cuddles and relaxing afternoons.", "image": Daisy, "breed": "Cocker Spaniel", "age": 4, "size": "Small", "location": "Philadelphia, PA" },
//       { "id": 7, "name": "Luna", "type": "Cat", "description": "A curious cat who loves climbing and finding cozy spots to nap.", "image": Luna, "breed": "Siamese", "age": 2, "size": "Small", "location": "San Diego, CA" },
//       { "id": 8, "name": "Mittens", "type": "Cat", "description": "A playful feline who enjoys chasing toys and lounging in sunny spots.", "image": Mittens, "breed": "Maine Coon", "age": 3, "size": "Medium", "location": "Dallas, TX" },
//       { "id": 9, "name": "Simba", "type": "Cat", "description": "An affectionate cat who loves attention and exploring new spaces.", "image": Simba, "breed": "Bengal", "age": 4, "size": "Medium", "location": "San Jose, CA" },
//       { "id": 10, "name": "Cleo", "type": "Cat", "description": "A quiet and graceful cat who prefers peaceful moments and gentle strokes.", "image": Cleo, "breed": "Persian", "age": 5, "size": "Small", "location": "Austin, TX" },
//       { "id": 11, "name": "Thumper", "type": "Bunnies", "description": "A fluffy bunny who enjoys hopping around and nibbling on fresh greens.", "image": Thumper, "breed": "Holland Lop", "age": 1, "size": "Small", "location": "Denver, CO" },
//       { "id": 12, "name": "Cocoa", "type": "Bunnies", "description": "A sweet and curious bunny who loves exploring and snuggling.", "image": Cocoa, "breed": "Netherland Dwarf", "age": 2, "size": "Small", "location": "Seattle, WA" }
//     ];    
//   };

  