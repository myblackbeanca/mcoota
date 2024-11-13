import React from 'react';
import { Disc3, Lock } from 'lucide-react';

interface MinyClaimButtonProps {
  claimed?: boolean;
  onClick?: () => void;
}

export default function MinyClaimButton({ claimed = false, onClick }: MinyClaimButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all
        ${claimed 
          ? 'bg-purple-600 text-white hover:bg-purple-700' 
          : 'bg-white/10 text-gray-300 hover:bg-white/20'
        }`}
    >
      {claimed ? (
        <>
          <Disc3 className="w-4 h-4" />
          <span>Claimed on MINY</span>
        </>
      ) : (
        <>
          <Lock className="w-4 h-4" />
          <span>Claim on MINY</span>
        </>
      )}
    </button>
  );
}