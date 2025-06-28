import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (n) => {
    setRating(n);
  };

  const getClassName = (index) => {
    if (index < rating) {
      switch (rating) {
        case 1: return 'star one';
        case 2: return 'star two';
        case 3: return 'star three';
        case 4: return 'star four';
        case 5: return 'star five';
        default: return 'star';
      }
    }
    return 'star';
  };

  return (
    <div>
      <h2>Rate this product:</h2>
      <div id="stars">
        {[1, 2, 3, 4, 5].map((num, i) => (
          <span
            key={i}
            className={getClassName(i)}
            onClick={() => handleRating(num)}
            style={{ fontSize: '30px', cursor: 'pointer', transition: '0.2s' }}
          >
            ★
          </span>
        ))}
      </div>
      <p id="output">Rating is: {rating}/5</p>
    </div>
  );
};

export default StarRating;
