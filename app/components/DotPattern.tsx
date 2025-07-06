interface DotPatternProps {
  isDark?: boolean;
}

const DotPattern: React.FC<DotPatternProps> = ({ isDark = true }) => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {/* Primary dot layer - smaller spacing */}
      <div 
        className="absolute inset-0 w-full h-full sm:hidden"
        style={{
          backgroundImage: `radial-gradient(${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'} 1.5px, transparent 1.5px)`,
          backgroundSize: '20px 20px', // Smaller on mobile
          backgroundPosition: '0 0',
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        }}
      />
      <div 
        className="absolute inset-0 w-full h-full hidden sm:block"
        style={{
          backgroundImage: `radial-gradient(${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'} 2px, transparent 2px)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0',
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        }}
      />
      {/* Secondary dot layer - medium spacing */}
      <div 
        className="absolute inset-0 w-full h-full sm:hidden"
        style={{
          backgroundImage: `radial-gradient(${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 1.5px, transparent 1.5px)`,
          backgroundSize: '40px 40px', // Smaller on mobile
          backgroundPosition: '20px 20px',
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        }}
      />
      <div 
        className="absolute inset-0 w-full h-full hidden sm:block"
        style={{
          backgroundImage: `radial-gradient(${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '30px 30px',
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        }}
      />
      {/* Tertiary dot layer - larger spacing */}
      <div 
        className="absolute inset-0 w-full h-full hidden md:block"
        style={{
          backgroundImage: `radial-gradient(${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'} 1.5px, transparent 1.5px)`,
          backgroundSize: '90px 90px',
          backgroundPosition: '45px 45px',
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        }}
      />
    </div>
  );
};

export default DotPattern; 