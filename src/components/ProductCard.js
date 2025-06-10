import React from 'react';
import './ProductCard.css';

function ProductCard({ image, title, click }) {
  return (
    <div onClick={click} style={{ cursor: 'pointer' }}>
      <div className="phone-image-container">
        <img src={image} alt={title} />
      </div>
      <h5 style={{ marginTop: '10px' }}>{title}</h5>
    </div>
  );
}

export default ProductCard;
