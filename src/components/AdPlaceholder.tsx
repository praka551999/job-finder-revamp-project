
import React from 'react';
import { cn } from '@/lib/utils';

interface AdPlaceholderProps {
  type: 'banner' | 'square' | 'sidebar';
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ type, className }) => {
  const getAdDimensions = () => {
    switch (type) {
      case 'banner':
        return 'h-24 md:h-32 w-full max-w-6xl mx-auto';
      case 'square':
        return 'h-64 w-64 mx-auto';
      case 'sidebar':
        return 'h-96 w-full';
      default:
        return 'h-24 w-full';
    }
  };

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className={cn(
        'bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center',
        getAdDimensions()
      )}>
        <div className="text-center text-gray-500">
          <div className="text-sm font-medium">Google AdSense</div>
          <div className="text-xs">{type.toUpperCase()} AD SPACE</div>
          <div className="text-xs mt-1">
            {type === 'banner' && '728x90 / 970x250'}
            {type === 'square' && '300x250'}
            {type === 'sidebar' && '160x600'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdPlaceholder;
