// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const clothingItems = [
    { id: 1, name: 'Elegant Red Dress', imageUrl: '/images/dress1.jpg' },
    { id: 2, name: 'Casual Summer Dress', imageUrl: '/images/dress2.jpg' },
    { id: 3, name: 'Classic Black Dress', imageUrl: '/images/dress3.jpg' },
    { id: 4, name: 'Modern Office Dress', imageUrl: '/images/dress4.jpg' },
    { id: 5, name: 'Modern Office Dress', imageUrl: '/images/dress4.jpg' },
    { id: 6, name: 'Modern Office Dress', imageUrl: '/images/dress4.jpg' },
    { id: 7, name: 'Modern Office Dress', imageUrl: '/images/dress4.jpg' },
    { id: 8, name: 'Modern Office Dress', imageUrl: '/images/dress4.jpg' },

  ];

  const handleSelect = (item) => {
    // Navigate to the try-on page with the selected dress id
    navigate(`/tryon/${item.id}`);
  };

  return (
    <div className="landing-page">
      <header className="hero">
        <div className="hero-content">
          <h1>Virtual Try-On</h1>
          <p>Discover the perfect dress for you with our virtual try-on experience.</p>
          <button onClick={() => navigate('/dresses')}>Browse Dresses</button>
        </div>
      </header>

      <section className="clothing-gallery">
        <h2>Featured Dresses</h2>
        <div className="gallery-grid">
          {clothingItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => handleSelect(item)}
            >
              <img src={item.imageUrl} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
