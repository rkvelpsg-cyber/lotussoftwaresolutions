import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

interface BinaryChar {
  x: number;
  y: number;
  char: string;
  speed: number;
  opacity: number;
}

export function DigitalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle system
    const particles: Particle[] = [];
    const particleCount = 60;
    const colors = ['#06b6d4', '#0891b2', '#14b8a6', '#8b5cf6', '#a855f7', '#ec4899'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Binary code rain
    const binaryChars: BinaryChar[] = [];
    const binaryCount = 40;

    for (let i = 0; i < binaryCount; i++) {
      binaryChars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        char: Math.random() > 0.5 ? '1' : '0',
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    // Code snippets
    const codeSnippets = [
      'function()',
      'const',
      'await',
      '{...}',
      '=>',
      'class',
      'import',
      '</>',
      'API',
      'SQL',
    ];

    const floatingCode: Array<{ x: number; y: number; text: string; speed: number; opacity: number }> = [];
    for (let i = 0; i < 15; i++) {
      floatingCode.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    // Animation loop
    let animationId: number;
    
    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections between particles
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Update and draw binary rain
      ctx.font = '14px monospace';
      binaryChars.forEach((char) => {
        char.y += char.speed;
        if (char.y > canvas.height) {
          char.y = -20;
          char.x = Math.random() * canvas.width;
          char.char = Math.random() > 0.5 ? '1' : '0';
        }

        ctx.fillStyle = `rgba(139, 92, 246, ${char.opacity})`;
        ctx.fillText(char.char, char.x, char.y);
      });

      // Draw floating code
      ctx.font = 'bold 12px monospace';
      floatingCode.forEach((code) => {
        code.y += code.speed;
        if (code.y > canvas.height + 20) {
          code.y = -20;
          code.x = Math.random() * canvas.width;
          code.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }

        ctx.fillStyle = `rgba(6, 182, 212, ${code.opacity})`;
        ctx.fillText(code.text, code.x, code.y);
      });

      // Draw circuit-like patterns
      ctx.strokeStyle = 'rgba(20, 184, 166, 0.1)';
      ctx.lineWidth = 2;
      const time = Date.now() * 0.0005;
      
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        const y = (canvas.height / 6) * i + Math.sin(time + i) * 20;
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 25%, #dbeafe 50%, #e0f2fe 75%, #f8fafc 100%)' }}
    />
  );
}
