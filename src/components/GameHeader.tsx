'use client';

const GameHeader: React.FC = () => {
  return (
    <div className="relative mb-8">
      {/* Logo in top-left */}
      <img
        src="/Succinct_Logo.png"
        alt="Game Logo"
        className="absolute top-0 left-0 w-16 h-16 animate-bounce"
      />

      {/* Centered header text */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">
          Crab, Bird, Dog
        </h1>
        <p className="text-lg text-black">
          A fun twist on Rock, Paper, Scissors!
        </p>
      </div>
    </div>
  );
};

export default GameHeader;
