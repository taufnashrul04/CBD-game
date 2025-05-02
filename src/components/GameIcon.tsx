
'use client';

import { type GameChoice } from './GameContainer';

interface GameIconProps {
  type: GameChoice;
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
}

const GameIcon: React.FC<GameIconProps> = ({ 
  type, 
  size = 'medium',
  animated = false
}) => {
  if (!type) return null;
  
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-16 h-16',
    large: 'w-24 h-24'
  };
  
  const animationClass = animated ? 'animate-bounce' : '';
  
  const renderIcon = () => {
    switch (type) {
      case 'crab':
        return (
          <div className={`${sizeClasses[size]} ${animationClass} bg-pink-400 rounded-full flex items-center justify-center`}>
            <div className="relative w-full h-full">
              {/* Crab body */}
              <div className="absolute inset-2 bg-pink-500 rounded-full"></div>
              {/* Crab eyes */}
              <div className="absolute top-3 left-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="absolute top-3 right-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
              {/* Crab claws */}
              <div className="absolute -left-2 top-1/2 w-4 h-3 bg-pink-500 rounded-md transform -rotate-45"></div>
              <div className="absolute -right-2 top-1/2 w-4 h-3 bg-pink-500 rounded-md transform rotate-45"></div>
            </div>
          </div>
        );
      case 'bird':
        return (
          <div className={`${sizeClasses[size]} ${animationClass} bg-yellow-300 rounded-full flex items-center justify-center`}>
            <div className="relative w-full h-full">
              {/* Bird body */}
              <div className="absolute inset-2 bg-yellow-400 rounded-full"></div>
              {/* Bird eyes */}
              <div className="absolute top-3 left-1/3 w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="absolute top-3 right-1/3 w-1.5 h-1.5 bg-black rounded-full"></div>
              {/* Bird beak */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-3 h-3 bg-orange-500 rotate-45"></div>
              {/* Bird wings */}
              <div className="absolute -left-2 top-1/2 w-4 h-3 bg-yellow-400 rounded-md"></div>
              <div className="absolute -right-2 top-1/2 w-4 h-3 bg-yellow-400 rounded-md"></div>
            </div>
          </div>
        );
      case 'dog':
        return (
          <div className={`${sizeClasses[size]} ${animationClass} bg-gray-100 rounded-full flex items-center justify-center`}>
            <div className="relative w-full h-full">
              {/* Dog body */}
              <div className="absolute inset-2 bg-white rounded-full"></div>
              {/* Dog eyes */}
              <div className="absolute top-3 left-1/3 w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="absolute top-3 right-1/3 w-1.5 h-1.5 bg-black rounded-full"></div>
              {/* Dog nose */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-2 h-2 bg-black rounded-full"></div>
              {/* Dog ears */}
              <div className="absolute -left-1 -top-1 w-4 h-4 bg-white rounded-md transform -rotate-45"></div>
              <div className="absolute -right-1 -top-1 w-4 h-4 bg-white rounded-md transform rotate-45"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return renderIcon();
};

export default GameIcon;
      