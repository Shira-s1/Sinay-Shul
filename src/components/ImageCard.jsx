import React from 'react';

const getImageUrl = (name) => {
  return new URL(`../images/${name}`, import.meta.url).href;
};

const ImageCard = ({ src, alt, title, description }) => {
  const imageUrl = src.startsWith('http') ? src : getImageUrl(src);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        src={imageUrl}
        alt={alt}
        loading="lazy"
        className="w-full h-64 object-cover transition-transform duration-300 ease-in-out"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/192x192/808080/FFFFFF?text=תמונה";
        }}
      />
      {(title || description) && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
          {title && <h3 className="text-xl font-bold mb-1">{title}</h3>}
          {description && <p className="text-sm">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default ImageCard;
