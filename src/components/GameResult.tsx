
'use client';
import { useState, useEffect } from 'react';
import { type GameChoice } from './GameContainer';
import AnimalCard from './AnimalCard';

interface GameResultProps {
  playerChoice: GameChoice;
  computerChoice: GameChoice;
  result: 'win' | 'lose' | 'tie' | null;
  isAnimating: boolean;
  onPlayAgain: () => void;
}

const GameResult: React.FC<GameResultProps> = ({
  playerChoice,
  computerChoice,
  result,
  isAnimating,
  onPlayAgain
}) => {
  const [resultMessage, setResultMessage] = useState<string>('');
  
  // Collection of random messages
  const winMessages = [
    "Congratulations! Your gprove is outstanding!",
    "Amazing win! Your strategy is unbeatable!",
    "Brilliant move! You're a natural at this game!",
    "Fantastic choice! Your gprove skills are impressive!",
    "You're on fire! Keep up the great gprove!",
    "Masterful play! Your gprove technique is flawless!"
  ];
  
  const loseMessages = [
    "Nice try! Your gprove needs a little more practice.",
    "Almost had it! The computer got lucky this time.",
    "Don't worry! Even the best gprove masters lose sometimes.",
    "So close! Your gprove strategy was almost perfect.",
    "Keep trying! Your gprove skills are improving.",
    "Not this time! But your gprove potential is clear!"
  ];
  
  const tieMessages = [
    "Great minds think alike!",
    "It's a standoff! Your gprove matched perfectly.",
    "Evenly matched! Your gprove is equal to the computer.",
    "Tie game! Your gprove strategy mirrored the computer's.",
    "Balanced match! Your gprove is in perfect harmony."
  ];

  useEffect(() => {
    if (result === 'win') {
      const randomIndex = Math.floor(Math.random() * winMessages.length);
      setResultMessage(winMessages[randomIndex]);
    } else if (result === 'lose') {
      const randomIndex = Math.floor(Math.random() * loseMessages.length);
      setResultMessage(loseMessages[randomIndex]);
    } else if (result === 'tie') {
      const randomIndex = Math.floor(Math.random() * tieMessages.length);
      setResultMessage(tieMessages[randomIndex]);
    } else {
      setResultMessage('');
    }
  }, [result]);

  if (!playerChoice) return (
    <div className="mt-0 md:mt-8 h-full flex items-center justify-center">
      <div className="p-6 rounded-lg border-2 bg-pink-50 border-pink-200 text-center w-full">
        <h3 className="text-xl font-semibold text-black mb-4">Game Result</h3>
        <p className="text-black mb-4">Make your selection to start the game!</p>
      </div>
    </div>
  );
  
  const getResultTitle = () => {
    if (!result) return '';
    
    switch (result) {
      case 'win':
        return 'You Win! 🎉';
      case 'lose':
        return 'Computer Wins! 😢';
      case 'tie':
        return "It's a Tie! 🤝";
      default:
        return '';
    }
  };
  
  const getResultColor = () => {
    if (!result) return 'bg-gray-100';
    
    switch (result) {
      case 'win':
        return 'bg-green-100 border-green-400';
      case 'lose':
        return 'bg-red-100 border-red-400';
      case 'tie':
        return 'bg-blue-100 border-blue-400';
      default:
        return 'bg-gray-100';
    }
  };
  
  return (
    <div className="mt-8 md:mt-0">
      <h2 className="text-2xl font-bold text-center text-black mb-4">Game Result:</h2>
      <div className={`p-6 rounded-lg border-2 ${getResultColor()} transition-all duration-300`}>
        {/* Horizontal layout for choices */}
        <div className="flex flex-row items-center justify-around gap-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-black mb-2">Your Choice</h3>
            <AnimalCard type={playerChoice} size="medium" />
          </div>
          
          <div className="text-center my-2">
            <h3 className="text-xl font-bold text-black">VS</h3>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-black mb-2">Computer's Choice</h3>
            {isAnimating ? (
              <div className="w-20 h-32 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
                <span className="text-gray-500 text-2xl">?</span>
              </div>
            ) : (
              <>
                {computerChoice && (
                  <AnimalCard type={computerChoice} size="medium" />
                )}
              </>
            )}
          </div>
        </div>
        
        {result && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-black mb-2">{getResultTitle()}</h2>
            <p className="text-lg text-black mb-4">{resultMessage}</p>
            <button
              onClick={onPlayAgain}
              className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameResult;