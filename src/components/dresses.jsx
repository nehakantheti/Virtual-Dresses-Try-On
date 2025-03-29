// src/pages/Dresses.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/dresses.css'; 

const dresses = [
  {
    id: 1,
    title: 'Elegant Red Dress',
    imageUrl: '/images/dress1.jpg',
    description: 'A stunning red dress perfect for formal occasions.',
  },
  {
    id: 2,
    title: 'Casual Summer Dress',
    imageUrl: '/images/dress2.jpg',
    description: 'Light and breezy, ideal for warm summer days.',
  },
  {
    id: 3,
    title: 'Classic Black Dress',
    imageUrl: '/images/dress3.jpg',
    description: 'Timeless and versatile for any event.',
  },
  {
    id: 4,
    title: 'Modern Office Dress',
    imageUrl: '/images/dress4.jpg',
    description: 'Chic and professional for the modern workplace.',
  },
];

function Dresses() {
  const navigate = useNavigate();

  const handleTryOn = (dressId) => {
    // Navigate to the try-on page with the selected dress ID
    navigate(`/tryon/${dressId}`);
  };

  return (
    <div className="dresses-page">
      <h1>All Dresses</h1>
      <div className="dresses-grid">
        {dresses.map((dress) => (
          <div className="dress-card" key={dress.id}>
            <img src={dress.imageUrl} alt={dress.title} />
            <div className="dress-info">
              <h2>{dress.title}</h2>
              <p>{dress.description}</p>
              <button onClick={() => handleTryOn(dress.id)}>Try-On</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dresses;
