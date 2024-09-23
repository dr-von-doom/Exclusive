import React from 'react';
import { AdImageProps } from '@/types/AdImage';
const baseURL = import.meta.env.BASE_URL;

const AdImage: React.FC<AdImageProps> = ({ src, alt, href, className = '' }) => {
  return (
    <a href={href} className="block p-4">
      <img
        src={`${baseURL}/${src}`}
        alt={alt}
        className={`rounded-[20px] shadow-md max-w-full h-auto ${className}`}
      />
    </a>
  );
};

export default AdImage;