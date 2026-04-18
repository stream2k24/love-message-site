import { useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const StarField = ({ density = 120 }: { density?: number }) => {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: density }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 3,
    }));
  }, [density]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {/* Nebula glows */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-glow-pulse"
        style={{
          top: "10%",
          left: "-10%",
          background: "radial-gradient(circle, hsl(260 60% 50%) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-15 blur-3xl animate-glow-pulse"
        style={{
          bottom: "-10%",
          right: "-10%",
          background: "radial-gradient(circle, hsl(18 70% 60%) 0%, transparent 70%)",
          animationDelay: "3s",
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-starlight animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            boxShadow: star.size > 1.5 ? "0 0 6px hsl(var(--starlight))" : "none",
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
