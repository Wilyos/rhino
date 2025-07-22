import { useState } from 'react';
import { motion } from 'framer-motion';
import exterior1 from '../assets/gallery/casa-exterior-1.jpg';
import exterior2 from '../assets/gallery/casa-exterior-2.jpg';
import exterior3 from '../assets/gallery/casa-exterior-3.jpg';
import exterior4 from '../assets/gallery/casa-exterior-4.jpg';
import interior1 from '../assets/gallery/casa-interior-1.jpg';
import interior2 from '../assets/gallery/casa-interior-2.jpg';
import interior3 from '../assets/gallery/casa-interior-3.jpg';
import interior4 from '../assets/gallery/casa-interior-4.jpg';
import interior5 from '../assets/gallery/casa-interior-5.jpg';
import reparacion1 from '../assets/gallery/reparacion-1.jpg';
import reparacion2 from '../assets/gallery/reparacion-2.jpg';
import reparacion3 from '../assets/gallery/reparacion-3.jpg';

const categories = [
  'All',
  'Exterior Painting',
  'Interior Painting',
  'Repair & Surface Restauration',
];

const galleryItems = [
  { id: 1, src: exterior1, category: 'Exterior Painting' },
  { id: 2, src: exterior2, category: 'Exterior Painting' },
  { id: 3, src: exterior3, category: 'Exterior Painting' },
  { id: 4, src: exterior4, category: 'Exterior Painting' },
  { id: 5, src: interior1, category: 'Interior Painting' },
  { id: 6, src: interior2, category: 'Interior Painting' },
  { id: 7, src: interior3, category: 'Interior Painting' },
  { id: 8, src: interior4, category: 'Interior Painting' },
  { id: 9, src: interior5, category: 'Interior Painting' },
  { id: 10, src: reparacion1, category: 'Repair & Surface Restauration' },
  { id: 11, src: reparacion2, category: 'Repair & Surface Restauration' },
  { id: 12, src: reparacion3, category: 'Repair & Surface Restauration' },
];



const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.1, // delay entre imágenes
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayedItems, setDisplayedItems] = useState(galleryItems);
  const [fadeOut, setFadeOut] = useState(false);


   const handleCategoryChange = (cat) => {
  setFadeOut(true); // inicia fade-out

  setTimeout(() => {
    const filtered =
      cat === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === cat);

    setDisplayedItems(filtered);     // cambia las imágenes
    setSelectedCategory(cat);       // cambia la categoría
    setFadeOut(false);              // termina fade
  }, 300); // mismo tiempo que la transición
};


  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="gallery-section" id='gallery'>
      <h3>Gallery</h3>
      <h1>OUR PORTFOLIO</h1>
      <div className="gallery-container">
        <div className="gallery-menu">
          {categories.map(cat => (
            <div
              key={cat}
              className={`gallery-menu-item ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat)}
            >
              <a href="#gallery">{cat}</a>
            </div>
          ))}
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="show" className="gallery-grid">
          {displayedItems.map(item => (
            <motion.div key={item.id} variants={itemVariants} className="gallery-item">
              <img src={item.src} alt="" />
              <div className="overlay" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};


export default Gallery;
