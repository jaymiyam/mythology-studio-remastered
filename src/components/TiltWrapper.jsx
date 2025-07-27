import { useState, useRef } from 'react';

const TiltWrapper = ({ children, classes = '' }) => {
  const [tilt, setTilt] = useState('');
  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();

    const dx = e.clientX - rect.left;
    const dy = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((dy - centerY) / centerY) * 15;
    const tiltY = ((dx - centerX) / centerX) * -15;

    const newTilt = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98) `;
    setTilt(newTilt);
  };

  const handleMouseLeave = () => {
    setTilt('');
  };
  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative size-full border border-babyBlue-50/50 rounded-lg overflow-hidden perspective-[700px] transform-3d ${classes}`}
      style={{ transition: 'transform 0.2s linear', transform: `${tilt}` }}
    >
      {children}
    </div>
  );
};

export default TiltWrapper;
