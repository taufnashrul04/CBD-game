
'use client';
import { useEffect, useRef } from 'react';

const ComputerScienceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Binary and computer science symbols
    const symbols = ['0', '1', '<>', '{}', '()', '[]', '&&', '||', '==', '!=', '+=', '-=', '*=', '/='];
    
    // Create particles
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      symbol: string;
      opacity: number;
    }> = [];
    
    const createParticles = () => {
      const particleCount = Math.floor(canvas.width * canvas.height / 10000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 12 + 8,
          speed: Math.random() * 0.5 + 0.1,
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          opacity: Math.random() * 0.2 + 0.1
        });
      }
    };
    
    createParticles();
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(252, 231, 243, 0.8)'); // pink-100 with opacity
      gradient.addColorStop(1, 'rgba(249, 168, 212, 0.8)'); // pink-300 with opacity
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.font = `${particle.size}px monospace`;
        ctx.fillStyle = `rgba(0, 0, 0, ${particle.opacity})`;
        ctx.fillText(particle.symbol, particle.x, particle.y);
        
        // Move particles
        particle.y += particle.speed;
        
        // Reset particles that go off screen
        if (particle.y > canvas.height) {
          particle.y = -particle.size;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
};

export default ComputerScienceBackground;
