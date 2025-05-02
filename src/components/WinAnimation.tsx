
'use client';
import { useEffect, useState } from 'react';

interface WinAnimationProps {}

const WinAnimation: React.FC<WinAnimationProps> = () => {
  const [texts, setTexts] = useState<Array<{
    id: number;
    text: string;
    x: number;
    y: number;
    speed: number;
    color: string;
    size: number;
    rotation: number;
  }>>([]);

  useEffect(() => {
    const winTexts = [
      'You Win!', 
      'Great Job!', 
      'Amazing!', 
      'Fantastic!', 
      'Well Done!', 
      'Victory!', 
      'Champion!',
      'Superb!',
      'Excellent!',
      'Perfect!',
      'Brilliant!',
      'Outstanding!',
      'Magnificent!',
      'Spectacular!',
      'Impressive!'
    ];
    const colors = ['text-pink-600', 'text-yellow-500', 'text-blue-500', 'text-green-500', 'text-purple-500'];
    
    // Create falling texts - more texts for a more dramatic effect
    const newTexts = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      text: winTexts[Math.floor(Math.random() * winTexts.length)],
      x: Math.random() * 100, // percentage across screen
      y: -20 - Math.random() * 200, // start above screen at different positions
      speed: 2 + Math.random() * 4, // faster speed
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 2 + Math.random() * 3, // larger text sizes (2-5rem)
      rotation: -20 + Math.random() * 40 // random rotation
    }));
    
    setTexts(newTexts);
    
    // Animation frame
    let animationId: number;
    let lastTime = 0;
    
    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;
      
      setTexts(prevTexts => 
        prevTexts.map(text => ({
          ...text,
          y: text.y + (text.speed * deltaTime * 0.01),
        })).filter(text => text.y < 120) // Remove texts that have fallen off screen
      );
      
      if (texts.length > 0) {
        animationId = requestAnimationFrame(animate);
      }
    };
    
    animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {texts.map(text => (
        <div
          key={text.id}
          className={`absolute font-bold ${text.color}`}
          style={{
            left: `${text.x}%`,
            top: `${text.y}%`,
            transform: `translate(-50%, -50%) rotate(${text.rotation}deg)`,
            fontSize: `${text.size}rem`,
            opacity: Math.min(1, 2 - text.y / 60), // Fade out as they fall
            textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
          }}
        >
          {text.text}
        </div>
      ))}
    </div>
  );
};

export default WinAnimation;
