// src/components/LoadingSkeleton.jsx
import React from 'react';

const LoadingSkeleton = ({ height = '200px' }) => (
  <div
    className="animate-pulse bg-gray-200 rounded-md w-full"
    style={{ height }}
  ></div>
);

export default LoadingSkeleton;
