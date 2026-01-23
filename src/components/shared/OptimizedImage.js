import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  placeholder = 'https://via.placeholder.com/400x200?text=Loading...',
  fallback = 'https://via.placeholder.com/400x200?text=Image+Not+Found',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.onerror = () => {
      setImageSrc(fallback);
      setHasError(true);
    };
  }, [src, fallback]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`optimized-image ${isLoaded ? 'loaded' : 'loading'} ${hasError ? 'error' : ''} ${className}`}
      loading="lazy"
      {...props}
    />
  );
};

export default OptimizedImage;