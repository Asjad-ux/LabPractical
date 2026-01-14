import { useEffect, useState } from "react";

const FlaskAnimation = () => {
  const [phase, setPhase] = useState<'idle' | 'pouring' | 'mixing' | 'complete'>('idle');
  const [liquidLevel, setLiquidLevel] = useState(0);

  useEffect(() => {
    const cycle = () => {
      setPhase('idle');
      setLiquidLevel(0);
      
      setTimeout(() => {
        setPhase('pouring');
      }, 500);
      
      setTimeout(() => {
        setLiquidLevel(1);
      }, 1000);
      
      setTimeout(() => {
        setPhase('mixing');
      }, 3000);
      
      setTimeout(() => {
        setPhase('complete');
      }, 5500);
    };

    cycle();
    const interval = setInterval(cycle, 8000);
    return () => clearInterval(interval);
  }, []);

  const getLiquidColor = () => {
    if (phase === 'complete') return 'hsl(0, 75%, 55%)'; // red
    if (phase === 'mixing') return 'hsl(25, 90%, 55%)'; // orange transition
    return 'hsl(45, 100%, 60%)'; // yellow
  };

  return (
    <div className="relative w-96 h-[500px] flex items-center justify-center overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 right-16 w-40 h-40 rounded-full blur-[80px] transition-all duration-1000 opacity-40"
          style={{ backgroundColor: 'hsl(330, 80%, 65%)' }}
        />
        <div 
          className="absolute bottom-32 left-16 w-56 h-56 rounded-full blur-[100px] transition-all duration-1000 opacity-30"
          style={{ backgroundColor: getLiquidColor() }}
        />
      </div>

      {/* Lab table surface */}
      <div className="absolute bottom-16 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-muted/30 to-transparent rounded-full" />

      {/* Round Bottom Flask (Left - receiving flask) */}
      <svg
        className="absolute bottom-20 left-4 w-48 h-56"
        viewBox="0 0 140 170"
      >
        {/* Flask shadow */}
        <ellipse cx="70" cy="165" rx="45" ry="5" fill="hsl(0, 0%, 0%)" opacity="0.3" />
        
        {/* Flask neck */}
        <path
          d="M55 5 L55 35 L50 45 L50 50"
          fill="none"
          stroke="hsl(0, 0%, 35%)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M85 5 L85 35 L90 45 L90 50"
          fill="none"
          stroke="hsl(0, 0%, 35%)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Flask neck top rim */}
        <ellipse cx="70" cy="5" rx="15" ry="3" fill="none" stroke="hsl(0, 0%, 35%)" strokeWidth="2" />
        
        {/* Flask body - round bottom with realistic curves */}
        <path
          d="M50 50 Q25 70 20 110 Q18 140 70 155 Q122 140 120 110 Q115 70 90 50"
          fill="none"
          stroke="hsl(0, 0%, 35%)"
          strokeWidth="2.5"
        />
        
        {/* Glass highlight */}
        <path
          d="M35 60 Q28 80 27 100"
          fill="none"
          stroke="hsl(0, 0%, 50%)"
          strokeWidth="1.5"
          opacity="0.6"
          strokeLinecap="round"
        />
        
        {/* Yellow/Mixed liquid base */}
        <path
          d="M52 52 Q28 72 24 110 Q22 138 70 150 Q118 138 116 110 Q112 72 88 52 Z"
          fill={getLiquidColor()}
          opacity="0.85"
          className="transition-all duration-700"
        />
        
        {/* Liquid surface highlight */}
        <ellipse 
          cx="70" 
          cy="55" 
          rx="18" 
          ry="4" 
          fill="hsl(0, 0%, 100%)" 
          opacity="0.15"
        />
        
        {/* Added liquid from pour */}
        <path
          d="M60 40 Q55 45 55 52 L85 52 Q85 45 80 40 Z"
          fill="hsl(330, 80%, 65%)"
          opacity={phase === 'pouring' || phase === 'mixing' ? 0.6 : 0}
          className="transition-opacity duration-500"
        />
        
        {/* Mixing swirl effect */}
        <g 
          className={phase === 'mixing' ? 'animate-stir' : ''}
          style={{ transformOrigin: '70px 100px' }}
        >
          <ellipse
            cx="70"
            cy="100"
            rx="25"
            ry="12"
            fill="none"
            stroke="hsl(330, 80%, 70%)"
            strokeWidth="3"
            opacity={phase === 'mixing' ? 0.5 : 0}
            strokeDasharray="8 4"
            className="transition-opacity duration-300"
          />
          <ellipse
            cx="70"
            cy="110"
            rx="35"
            ry="15"
            fill="none"
            stroke="hsl(0, 0%, 100%)"
            strokeWidth="2"
            opacity={phase === 'mixing' ? 0.25 : 0}
            strokeDasharray="12 6"
            className="transition-opacity duration-300"
          />
        </g>
        
        {/* Bubbles */}
        <g opacity={phase === 'mixing' || phase === 'complete' ? 1 : 0.3}>
          <circle cx="55" cy="120" r="4" fill="hsl(0, 0%, 100%)" opacity="0.35" className="animate-bubble" />
          <circle cx="80" cy="105" r="3" fill="hsl(0, 0%, 100%)" opacity="0.3" className="animate-bubble" style={{ animationDelay: '0.4s' }} />
          <circle cx="65" cy="130" r="2.5" fill="hsl(0, 0%, 100%)" opacity="0.4" className="animate-bubble" style={{ animationDelay: '0.8s' }} />
          <circle cx="85" cy="125" r="3.5" fill="hsl(0, 0%, 100%)" opacity="0.3" className="animate-bubble" style={{ animationDelay: '0.6s' }} />
          <circle cx="50" cy="100" r="2" fill="hsl(0, 0%, 100%)" opacity="0.35" className="animate-bubble" style={{ animationDelay: '1.1s' }} />
        </g>
        
        {/* Reaction glow during mixing */}
        <ellipse
          cx="70"
          cy="110"
          rx="40"
          ry="35"
          fill={phase === 'complete' ? 'hsl(0, 75%, 55%)' : 'hsl(330, 80%, 65%)'}
          opacity={phase === 'mixing' || phase === 'complete' ? 0.15 : 0}
          className="transition-all duration-500"
          filter="blur(8px)"
        />
      </svg>

      {/* Conical Flask (Right - pouring flask) */}
      <svg
        className="absolute top-12 right-8 w-40 h-48"
        viewBox="0 0 120 150"
        style={{
          transform: phase === 'pouring' 
            ? 'rotate(-55deg) translateX(-20px) translateY(10px)' 
            : 'rotate(0deg)',
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          transformOrigin: 'bottom left'
        }}
      >
        {/* Flask shadow */}
        <ellipse cx="60" cy="135" rx="35" ry="4" fill="hsl(0, 0%, 0%)" opacity="0.2" />
        
        {/* Flask neck */}
        <rect
          x="42"
          y="8"
          width="36"
          height="22"
          fill="none"
          stroke="hsl(0, 0%, 35%)"
          strokeWidth="2.5"
          rx="2"
        />
        
        {/* Neck rim */}
        <ellipse cx="60" cy="8" rx="18" ry="3" fill="none" stroke="hsl(0, 0%, 35%)" strokeWidth="2" />
        
        {/* Conical body */}
        <path
          d="M42 30 L42 55 L15 130 L105 130 L78 55 L78 30"
          fill="none"
          stroke="hsl(0, 0%, 35%)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        
        {/* Glass highlights */}
        <path
          d="M38 60 L22 115"
          fill="none"
          stroke="hsl(0, 0%, 50%)"
          strokeWidth="1.5"
          opacity="0.5"
          strokeLinecap="round"
        />
        <path
          d="M34 70 L25 100"
          fill="none"
          stroke="hsl(0, 0%, 60%)"
          strokeWidth="1"
          opacity="0.3"
          strokeLinecap="round"
        />
        
        {/* Pink liquid */}
        <path
          d="M44 58 L44 52 L76 52 L76 58 L98 125 L22 125 Z"
          fill="hsl(330, 80%, 65%)"
          opacity={phase === 'complete' ? 0.4 : 0.9}
          className="transition-opacity duration-700"
        />
        
        {/* Liquid surface */}
        <path
          d="M44 52 L76 52"
          fill="none"
          stroke="hsl(330, 90%, 75%)"
          strokeWidth="2"
          opacity="0.4"
        />
        
        {/* Liquid highlight */}
        <path
          d="M52 60 L42 95"
          fill="none"
          stroke="hsl(0, 0%, 100%)"
          strokeWidth="2"
          opacity="0.15"
          strokeLinecap="round"
        />
        
        {/* Bubbles in conical flask */}
        <circle cx="50" cy="100" r="3" fill="hsl(0, 0%, 100%)" opacity="0.3" className="animate-bubble" />
        <circle cx="70" cy="90" r="2" fill="hsl(0, 0%, 100%)" opacity="0.25" className="animate-bubble" style={{ animationDelay: '0.5s' }} />
        <circle cx="60" cy="110" r="2.5" fill="hsl(0, 0%, 100%)" opacity="0.3" className="animate-bubble" style={{ animationDelay: '1s' }} />
      </svg>

      {/* Pouring stream */}
<svg
  className="absolute top-28 left-20 w-32 h-48 pointer-events-none"
  viewBox="0 0 100 150"
  style={{
    opacity: phase === 'pouring' ? 1 : 0,
    transition: 'opacity 0.4s ease-in-out',
  }}
>
  {/* Main pour stream */}
  <path
    d="M65 0 Q40 50 40 100 Q45 130 70 150"
    fill="none"
    stroke="hsl(330, 80%, 65%)"
    strokeWidth="8"
    strokeLinecap="round"
    opacity="0.85"
    style={{
      strokeDasharray: '150',
      strokeDashoffset: phase === 'pouring' ? '0' : '150',
      transition: 'stroke-dashoffset 0.8s ease-out',
    }}
  />
  {/* Stream highlight */}
  <path
    d="M67 5 Q42 55 42 105"
    fill="none"
    stroke="hsl(330, 90%, 80%)"
    strokeWidth="2"
    strokeLinecap="round"
    opacity="0.4"
    style={{
      strokeDasharray: '100',
      strokeDashoffset: phase === 'pouring' ? '0' : '100',
      transition: 'stroke-dashoffset 0.8s ease-out 0.1s',
    }}
  />
  {/* Drips */}
  <circle 
    cx="70" 
    cy="145" 
    r="4" 
    fill="hsl(330, 80%, 65%)" 
    opacity={phase === 'pouring' ? 0.7 : 0}
    className="animate-bubble"
  />
</svg>


      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-foreground/15 animate-float"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Steam/vapor effect */}
      <div 
        className="absolute bottom-48 left-20 w-16 h-24 pointer-events-none"
        style={{
          opacity: phase === 'mixing' || phase === 'complete' ? 0.4 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-muted-foreground/30 animate-float"
            style={{
              left: `${30 + i * 20}%`,
              bottom: '0',
              animationDelay: `${i * 0.3}s`,
              animationDuration: '2s',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FlaskAnimation;