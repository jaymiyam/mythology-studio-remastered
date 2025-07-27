import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Loading = () => {
  const loadingRef = useRef(null);

  useGSAP(() => {
    gsap.to(loadingRef.current, {
      opacity: 0,
      display: 'none',
      delay: 1,
    });
  });
  return (
    <div
      ref={loadingRef}
      className="flex justify-center items-center fixed z-[100] h-dvh w-screen overflow-hidden bg-black"
    >
      {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
};

export default Loading;
