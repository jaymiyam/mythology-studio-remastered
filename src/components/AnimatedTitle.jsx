import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ children }) => {
  const outerWrapperRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.set(containerRef.current, {
      opacity: 0,
      translateX: '10px',
      translateY: '51px',
      translateZ: '-60px',
      rotateX: -40,
      rotateY: 60,
    });

    const titleAnimation = gsap.to(containerRef.current, {
      opacity: 1,
      translateX: 0,
      translateY: 0,
      translateZ: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.2,
    });

    ScrollTrigger.create({
      animation: titleAnimation,
      trigger: outerWrapperRef.current,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    });
  });

  return (
    <div ref={outerWrapperRef}>
      <div ref={containerRef}>{children}</div>
    </div>
  );
};

export default AnimatedTitle;
