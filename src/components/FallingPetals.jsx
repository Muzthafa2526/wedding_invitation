import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, EyeOff, Eye } from 'lucide-react';

/**
 * FallingPetals renders a subtle, cinematic canvas animation of drifting ivory rose
 * petals and delicate olive leaves with organic fluttering physics.
 */
export const FallingPetals = () => {
  const canvasRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const animationFrameId = useRef(null);

  useEffect(() => {
    if (!isEnabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate petal particles
    const particleCount = window.innerWidth < 768 ? 16 : 28;
    const petals = [];

    const colors = [
      'rgba(244, 235, 218, 0.75)', // Warm ivory cream
      'rgba(197, 164, 109, 0.55)', // Muted gold shimmer
      'rgba(115, 123, 75, 0.45)',  // Olive leaf
      'rgba(238, 222, 204, 0.65)', // Pale rose champagne
    ];

    for (let i = 0; i < particleCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.8 + 0.4,
        speedX: Math.random() * 0.6 - 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        isLeaf: Math.random() > 0.65,
        oscillation: Math.random() * Math.PI * 2,
        oscillationSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.oscillation += p.oscillationSpeed;
        p.x += Math.sin(p.oscillation) * 0.6 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        ctx.fillStyle = p.color;
        ctx.beginPath();

        if (p.isLeaf) {
          // Olive leaf shape
          ctx.ellipse(0, 0, p.size * 0.5, p.size * 1.2, 0, 0, Math.PI * 2);
        } else {
          // Rose petal curve
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-p.size, -p.size * 0.8, -p.size * 0.6, p.size, 0, p.size * 1.2);
          ctx.bezierCurveTo(p.size * 0.6, p.size, p.size, -p.size * 0.8, 0, 0);
        }

        ctx.fill();
        ctx.restore();
      });

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isEnabled]);

  return (
    <>
      {isEnabled && (
        <canvas
          ref={canvasRef}
          className="pointer-events-none fixed inset-0 z-20"
          style={{ width: '100%', height: '100%' }}
        />
      )}

      {/* Discreet floating toggle button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsEnabled(!isEnabled)}
          title={isEnabled ? "Hide falling petals" : "Show falling petals"}
          aria-label={isEnabled ? "Disable falling petals" : "Enable falling petals"}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-cream-50/80 hover:bg-cream-100 backdrop-blur-md border border-gold-300/60 text-olive-700 hover:text-olive-900 shadow-sm transition-all text-xs font-serif"
        >
          <Sparkles className={`w-3.5 h-3.5 ${isEnabled ? 'text-gold-500' : 'text-gray-400'}`} />
          <span className="hidden sm:inline">{isEnabled ? 'Petals Active' : 'Petals Paused'}</span>
        </button>
      </div>
    </>
  );
};

