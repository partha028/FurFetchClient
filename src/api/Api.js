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

export const getPetData = () => {
    return [
      { id: 1, name: 'Buddy', type: 'Dog', desc: 'A playful and energetic dog who loves to fetch and run around the park.', image: Buddy },
      { id: 2, name: 'Charlie', type: 'Dog', desc: 'A friendly companion who enjoys long walks and belly rubs.', image: Charlie },
      { id: 3, name: 'Bella', type: 'Dog', desc: 'A curious and adventurous pup always ready to explore new places.', image: Bella },
      { id: 4, name: 'Max', type: 'Dog', desc: 'A loyal and protective dog who loves being around people.', image: Max },
      { id: 5, name: 'Rocky', type: 'Dog', desc: 'A fun-loving pup with an endless supply of energy and excitement.', image: Rocky },
      { id: 6, name: 'Daisy', type: 'Dog', desc: 'A gentle soul who enjoys cuddles and relaxing afternoons.', image: Daisy },
      { id: 7, name: 'Luna', type: 'Cat', desc: 'A curious cat who loves climbing and finding cozy spots to nap.', image: Luna },
      { id: 8, name: 'Mittens', type: 'Cat', desc: 'A playful feline who enjoys chasing toys and lounging in sunny spots.', image: Mittens },
      { id: 9, name: 'Simba', type: 'Cat', desc: 'An affectionate cat who loves attention and exploring new spaces.', image: Simba },
      { id: 10, name: 'Cleo', type: 'Cat', desc: 'A quiet and graceful cat who prefers peaceful moments and gentle strokes.', image: Cleo },
      { id: 11, name: 'Thumper', type: 'Bunnies', desc: 'A fluffy bunny who enjoys hopping around and nibbling on fresh greens.', image: Thumper },
      { id: 12, name: 'Cocoa', type: 'Bunnies', desc: 'A sweet and curious bunny who loves exploring and snuggling.', image: Cocoa },
    ];
  };