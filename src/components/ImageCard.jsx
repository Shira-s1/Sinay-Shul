// src/components/ImageCard.jsx
import React from 'react';

const getImageUrl = (name) => {
  return new URL(`../images/${name}`, import.meta.url).href;
};

const ImageCard = ({ src, alt, title, description }) => {
  const imageUrl = src.startsWith('http') ? src : getImageUrl(src);

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-xl cursor-pointer">
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />

     
      <div className="absolute inset-0 border-4 border-transparent group-hover:border-white transition-all duration-300 ease-in-out"></div>

      {(title || description) && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {title && <h3 className="text-xl font-bold mb-1">{title}</h3>}
          {description && <p className="text-sm">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default ImageCard;