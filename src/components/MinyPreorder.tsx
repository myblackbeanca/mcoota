import React from 'react';
import { Disc3, Star } from 'lucide-react';
import HexagonImage from './HexagonImage';

interface MinyPreorderProps {
  onClaimClick: () => void;
}

export default function MinyPreorder({ onClaimClick }: MinyPreorderProps) {
  const formats = [
    {
      type: 'MINY',
      image: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac',
      price: 19.99,
      description: '2" hexagonal vinyl'
    },
    {
      type: 'CD',
      image: 'https://images.unsplash.com/photo-1611465577672-8fc7be1dc826',
      price: 14.99,
      description: 'Compact Disc'
    },
    {
      type: 'Cassette',
      image: 'https://images.unsplash.com/photo-1594142404563-64cccaf5a10f',
      price: 9.99,
      description: 'Limited Edition Cassette'
    },
    {
      type: 'Bundle',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
      price: 39.99,
      description: 'All formats + exclusive content'
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Pre-order Now</h2>
        <p className="text-gray-300">Choose your preferred format or get the complete bundle</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {formats.map((format) => (
          <div key={format.type} className="bg-white/5 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
            <div className="relative mb-6">
              <HexagonImage
                src={format.image}
                alt={format.type}
                size="lg"
                className="mx-auto transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{format.type}</h3>
            <p className="text-gray-400 mb-4">{format.description}</p>
            <p className="text-2xl font-bold mb-6">${format.price}</p>
            <button
              onClick={onClaimClick}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors"
            >
              Pre-order {format.type}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-400">
          All pre-orders include exclusive access to listening sessions and behind-the-scenes content
        </p>
      </div>
    </div>
  );
}