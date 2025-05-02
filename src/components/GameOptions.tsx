
'use client';
import { type GameChoice } from './GameContainer';
import AnimalCard from './AnimalCard';
interface GameOptionsProps {
  onSelectOption: (option: GameChoice) => void;
  disabled: boolean;
  selectedOption: GameChoice;
}
const GameOptions: React.FC<GameOptionsProps> = ({ 
  onSelectOption, 
  disabled,
  selectedOption
}) => {
  const options: GameChoice[] = ['crab', 'bird', 'dog'];
  
  return (
    <div className="mb-8 md:mb-0">
      <h2 className="text-2xl font-bold text-center text-black mb-4">Choose Your Move:</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelectOption(option)}
            disabled={disabled}
            className={`
              p-2 rounded-lg transition-all duration-200
              ${selectedOption === option ? 'scale-110 ring-4 ring-pink-400' : 'hover:scale-105'}
              ${disabled ? 'opacity-70 cursor-not-allowed' : ''}
            `}
            aria-label={`Select ${option}`}
          >
            <AnimalCard type={option} isSelected={selectedOption === option} />
          </button>
        ))}
      </div>
    </div>
  );
};
export default GameOptions;