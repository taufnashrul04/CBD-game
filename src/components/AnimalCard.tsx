
'use client';
import { type GameChoice } from './GameContainer';

interface AnimalCardProps {
  type: GameChoice;
  isSelected?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const AnimalCard: React.FC<AnimalCardProps> = ({ 
  type, 
  isSelected = false,
  size = 'medium'
}) => {
  if (!type) return null;
  
  const sizeClasses = {
    small: 'w-16 h-24',
    medium: 'w-20 h-32 md:w-24 md:h-36',
    large: 'w-24 h-36 md:w-32 md:h-48'
  };
  
  const getCardContent = () => {
    switch (type) {
      case 'crab':
        return {
          name: 'Pink Crab',
          bgColor: 'bg-gradient-to-b from-pink-300 to-pink-500',
          image: (
            <div className="relative w-full h-3/5 bg-pink-200 rounded-t-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5">
                  {/* Crab body */}
                  <div className="absolute inset-0 bg-pink-500 rounded-full"></div>
                  {/* Crab eyes */}
                  <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full">
                    <div className="absolute inset-1/4 bg-black rounded-full"></div>
                  </div>
                  <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-white rounded-full">
                    <div className="absolute inset-1/4 bg-black rounded-full"></div>
                  </div>
                  {/* Crab claws */}
                  <div className="absolute -left-1/4 top-1/2 w-1/3 h-1/4 bg-pink-600 rounded-md transform -rotate-45"></div>
                  <div className="absolute -right-1/4 top-1/2 w-1/3 h-1/4 bg-pink-600 rounded-md transform rotate-45"></div>
                  {/* Crab legs */}
                  <div className="absolute left-1/6 bottom-0 w-1/12 h-1/3 bg-pink-600"></div>
                  <div className="absolute left-1/3 bottom-0 w-1/12 h-1/3 bg-pink-600"></div>
                  <div className="absolute right-1/6 bottom-0 w-1/12 h-1/3 bg-pink-600"></div>
                  <div className="absolute right-1/3 bottom-0 w-1/12 h-1/3 bg-pink-600"></div>
                </div>
              </div>
            </div>
          )
        };
      case 'bird':
        return {
          name: 'Yellow Bird',
          bgColor: 'bg-gradient-to-b from-yellow-200 to-yellow-400',
          image: (
            <div className="relative w-full h-3/5 bg-blue-100 rounded-t-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5">
                  {/* Bird body */}
                  <div className="absolute inset-0 bg-yellow-300 rounded-full"></div>
                  {/* Bird eyes */}
                  <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-white rounded-full">
                    <div className="absolute inset-1/4 bg-black rounded-full"></div>
                  </div>
                  {/* Bird beak */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-3 h-3 bg-orange-500 rotate-45"></div>
                  {/* Bird wings */}
                  <div className="absolute -left-1/4 top-1/2 w-1/3 h-1/4 bg-yellow-400 rounded-md"></div>
                  <div className="absolute -right-1/4 top-1/2 w-1/3 h-1/4 bg-yellow-400 rounded-md"></div>
                  {/* Bird tail */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1/6 bg-yellow-400"></div>
                </div>
              </div>
            </div>
          )
        };
      case 'dog':
        return {
          name: 'White Dog',
          bgColor: 'bg-gradient-to-b from-gray-100 to-gray-300',
          image: (
            <div className="relative w-full h-3/5 bg-blue-50 rounded-t-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5">
                  {/* Dog head */}
                  <div className="absolute inset-0 bg-white rounded-full"></div>
                  {/* Dog eyes */}
                  <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-black rounded-full"></div>
                  {/* Dog nose */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-3 h-2 bg-black rounded-full"></div>
                  {/* Dog ears */}
                  <div className="absolute -left-1/6 -top-1/6 w-1/3 h-1/3 bg-white rounded-md transform -rotate-45"></div>
                  <div className="absolute -right-1/6 -top-1/6 w-1/3 h-1/3 bg-white rounded-md transform rotate-45"></div>
                  {/* Dog mouth */}
                  <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-1/4 h-1/12 bg-pink-300 rounded-full"></div>
                </div>
              </div>
            </div>
          )
        };
      default:
        return {
          name: '',
          bgColor: 'bg-gray-200',
          image: null
        };
    }
  };
  
  const content = getCardContent();
  
  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        ${content.bgColor} 
        rounded-lg shadow-lg overflow-hidden 
        transition-all duration-300
        ${isSelected ? 'transform scale-105 shadow-xl ring-4 ring-pink-400' : 'hover:scale-105'}
      `}
    >
      {content.image}
      <div className="p-2 text-center">
        <h3 className="font-bold text-black text-xs md:text-sm">{content.name}</h3>
        <p className="text-xs text-black opacity-75 mt-1">
          {type === 'crab' ? 'Beats Dog' : type === 'bird' ? 'Beats Crab' : 'Beats Bird'}
        </p>
      </div>
    </div>
  );
};

export default AnimalCard;
