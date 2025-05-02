
'use client';
import { type GameHistoryItem } from './GameContainer';
import AnimalCard from './AnimalCard';

interface GameHistoryProps {
  history: GameHistoryItem[];
}

const GameHistory: React.FC<GameHistoryProps> = ({ history }) => {
  if (history.length === 0) {
    return (
      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <p className="text-center text-black">No game history yet. Play a game!</p>
      </div>
    );
  }

  const formatTime = (date: Date): string => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center text-black mb-4">Game History</h2>
      <div className="bg-pink-50 rounded-lg p-4 max-h-80 overflow-y-auto">
        {history.map((game, index) => (
          <div 
            key={index} 
            className={`
              mb-4 p-3 rounded-lg flex items-center justify-between
              ${game.result === 'win' ? 'bg-green-100' : game.result === 'lose' ? 'bg-red-100' : 'bg-blue-100'}
            `}
          >
            <div className="flex items-center space-x-4">
              <AnimalCard type={game.playerChoice} size="small" />
              <span className="text-black font-bold">VS</span>
              <AnimalCard type={game.computerChoice} size="small" />
            </div>
            <div className="text-right">
              <p className="text-black font-medium">
                {game.result === 'win' ? 'You won!' : game.result === 'lose' ? 'Computer won' : 'Tie game'}
              </p>
              <p className="text-xs text-gray-600">{formatTime(game.timestamp)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameHistory;
