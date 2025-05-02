
'use client';
interface ScoreBoardProps {
  playerScore: number;
  computerScore: number;
  onResetScores: () => void;
}
const ScoreBoard: React.FC<ScoreBoardProps> = ({ 
  playerScore, 
  computerScore,
  onResetScores
}) => {
  const shareOnTwitter = () => {
    // Create the tweet text
    const tweetText = `I just played Crab, Bird, Dog! My score: ${playerScore} - Computer: ${computerScore}. ${playerScore > computerScore ? "I'm winning! 🎉" : playerScore < computerScore ? "I'll get better! 💪" : "It's a tie! 🤝"} Come play this fun twist on Rock, Paper, Scissors! join this link to play .. support me follow @taufnashrul and support this project @SuccinctLabs`;
    
    // Encode the tweet text for a URL
    const encodedTweet = encodeURIComponent(tweetText);
    
    // Create the Twitter Web Intent URL - using the new X.com URL
    const twitterUrl = `https://x.com/compose/post?text=${encodedTweet}`;
    
    // Open a new window with the Twitter Web Intent
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="flex gap-8 bg-pink-50 p-4 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-black">You</h2>
          <p className="text-3xl font-bold text-pink-600">{playerScore}</p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold text-black">Computer</h2>
          <p className="text-3xl font-bold text-pink-600">{computerScore}</p>
        </div>
      </div>
      
      <div className="flex gap-4 mt-4">
        <button 
          onClick={onResetScores}
          className="px-4 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-colors text-sm"
        >
          Reset Scores
        </button>
        
        <button 
          onClick={shareOnTwitter}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm flex items-center"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            aria-hidden="true"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
          Share Stats
        </button>
      </div>
    </div>
  );
};
export default ScoreBoard;
