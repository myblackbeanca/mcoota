import React from 'react';

interface HexagonImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function HexagonImage({ src, alt, size = 'md', className = '' }: HexagonImageProps) {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <div className="absolute inset-0 overflow-hidden" style={{
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
      }}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
}