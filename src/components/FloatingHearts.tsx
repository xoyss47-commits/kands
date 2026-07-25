import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const initial = setInterval(() => {
      const newHeart: Heart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 24 + 12,
        duration: Math.random() * 8 + 10,
        delay: 0,
        opacity: Math.random() * 0.5 + 0.2,
      };
      setHearts((prev) => {
        const updated = [...prev, newHeart];
        if (updated.length > 25) updated.shift();
        return updated;
      });
    }, 1200);
    return () => clearInterval(initial);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-rose-300/60 animate-float"
          style={{
            left: `${heart.left}%`,
            bottom: "-60px",
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animationDuration: `${heart.duration}s`,
            animationName: "floatUp",
            animationTimingFunction: "linear",
            animationFillMode: "forwards",
          }}
        >
          💕
        </div>
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.7; }
          100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
