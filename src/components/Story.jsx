import { useRef } from 'react';
import AnimatedTitle from './AnimatedTitle';
import Button from './Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Icon } from '@iconify/react/dist/iconify.js';

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = imageRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: 'none',
    });
  };

  const handleMouseLeave = () => {
    const element = imageRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: 'power1.inOut',
      });
    }
  };
  return (
    <section id="story" className="bg-black pb-40 min-h-dvh w-screen">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col gap-10 items-center text-center">
          <p className="uppercase text-xs text-babyBlue-75">
            unforgettable stories
          </p>
          <div className="relative z-99 mix-blend-difference">
            <AnimatedTitle>
              <h2 className="uppercase text-7xl md:text-8xl text-white text-balance font-zentry-regular leading-[0.8] max-w-[20ch]">
                We deliv<span className="special-font">e</span>r exception
                <span className="special-font">a</span>l imp
                <span className="special-font">a</span>ct with m
                <span className="special-font">o</span>tion
              </h2>
            </AnimatedTitle>
          </div>
        </div>
        <div className="relative size-full">
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={imageRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="images/work-clip-8-poster.png"
                  className="object-contain"
                />
              </div>
            </div>
            {/* for the rounded corner */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="w-full flex justify-center md:justify-end sm:-mt-10 md:-mt-24">
          <div className="flex flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              We don't just animate, we partner with you to achieve your vision
              and push the boundaries of what's possible. More than just pixels,
              it's an investment in your brand's future success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
