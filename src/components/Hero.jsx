import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import HeroItem from './HeroItem';
import Button from './Button';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const videoList = [
  'videos/work-clip-12.mp4',
  'videos/work-clip-2.mp4',
  'videos/work-clip-9.mp4',
  'videos/work-clip-10.mp4',
];
const heroStyles = [
  {
    display: 'none',
    zIndex: 0,
    width: '256px',
    height: '256px',
    borderRadius: '2rem',
    border: '1px solid black',
  },
  {
    display: 'block',
    zIndex: 1,
    width: '100dvw',
    height: '100dvh',
    borderRadius: '0',
    border: 'none',
  },
  {
    display: 'block',
    zIndex: 2,
    width: '100dvw',
    height: '100dvh',
    borderRadius: '0',
    border: 'none',
  },
  {
    display: 'block',
    zIndex: 3,
    width: '256px',
    height: '256px',
    borderRadius: '2rem',
    border: '1px solid black',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsRef = useRef([]);
  const hitArea = useRef(null);

  const setRef = (el, index) => {
    itemsRef.current[index] = el;
  };

  // hit area handlers
  const hitAreaHoverIn = () => {
    const targetEl = itemsRef.current[(currentIndex + 3) % videoList.length];
    gsap.to(targetEl, {
      opacity: 1,
      duration: 0.3,
      ease: 'power1.out',
    });
    gsap.to(targetEl.querySelector('video'), {
      scale: 1.5,
      duration: 0.3,
      ease: 'power1.out',
    });
  };

  const hitAreaHoverOut = () => {
    const targetEl = itemsRef.current[(currentIndex + 3) % videoList.length];

    gsap.to(targetEl, {
      opacity: 0,
      duration: 0.3,
      ease: 'power1.out',
    });
    gsap.to(targetEl.querySelector('video'), {
      scale: 1,
      duration: 0.3,
      ease: 'power1.out',
    });
  };

  const hitAreaClickHandler = () => {
    const nextIndex = (currentIndex + 1) % videoList.length;

    itemsRef.current.forEach((el, i) => {
      el.querySelector('video').pause();
      const styleIndex = (videoList.length + i - nextIndex) % videoList.length;
      gsap.to(el, {
        width: heroStyles[styleIndex].width,
        height: heroStyles[styleIndex].height,
        borderRadius: heroStyles[styleIndex].borderRadius,
        ease: 'power1.out',
        duration: 0.3,
      });
      gsap.set(el, {
        zIndex: heroStyles[styleIndex].zIndex,
        border: heroStyles[styleIndex].border,
      });
    });

    itemsRef.current[(nextIndex + 2) % videoList.length]
      .querySelector('video')
      .play();

    setCurrentIndex(nextIndex);
  };

  // set initial styles
  useGSAP(() => {
    itemsRef.current[(currentIndex + 2) % videoList.length]
      .querySelector('video')
      .play();
    itemsRef.current.forEach((el, i) => {
      const styleIndex =
        (videoList.length + i - currentIndex) % videoList.length;
      gsap.set(el, {
        width: heroStyles[styleIndex].width,
        height: heroStyles[styleIndex].height,
        zIndex: heroStyles[styleIndex].zIndex,
        borderRadius: heroStyles[styleIndex].borderRadius,
        border: heroStyles[styleIndex].border,
      });
    });
  });

  // hero clip path scrolltrigger
  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0% 0% 0% 0%',
    });
    const clipPath = gsap.to('#video-frame', {
      clipPath: 'polygon(14% 0, 72% 0, 88% 90%, 0 95%)',
      borderRadius: '0% 0% 40% 10%',
      ease: 'power1.inOut',
    });

    ScrollTrigger.create({
      animation: clipPath,
      trigger: '#video-frame',
      start: 'top top',
      end: 'bottom center',
      scrub: true,
    });
  });

  // jsx code
  return (
    <section id="hero" className="w-screen h-dvh relative bg-babyBlue-75">
      <div
        className="w-full h-full relative overflow-hidden rounded-lg z-1"
        id="video-frame"
      >
        {videoList.map((video, index) => (
          <HeroItem
            key={index}
            video={video}
            isPreview={index === (currentIndex + 3) % videoList.length}
            ref={(el) => setRef(el, index)}
          />
        ))}
        <div
          onClick={hitAreaClickHandler}
          onMouseEnter={hitAreaHoverIn}
          onMouseLeave={hitAreaHoverOut}
          ref={hitArea}
          id="hit-area"
          className="z-99 w-64 aspect-square absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
        ></div>
        <div className="absolute top-4 left-4 z-10 grid gap-4">
          <h1 className="mt-24 uppercase font-zentry-regular text-8xl md:text-[140px] lg:text-[180px] text-white leading-[0.8]">
            redefi<span className="special-font">n</span>e
          </h1>
          <p className="font-robert-regular text-white text-md font-light max-w-[25ch]">
            Enter the world of stunning animations that ignite emotions.
          </p>
          <a href="#contact">
            <Button
              text="get in touch"
              containerClass="bg-neonViolet-300 text-white"
              leftIcon={<Icon icon="ion:paper-plane" width="16" height="16" />}
            />
          </a>
        </div>
        <div className="absolute bottom-4 right-4 z-10">
          <h1 className="uppercase font-zentry-regular text-8xl md:text-[140px] lg:text-[180px] text-neonYellow-300 leading-[0.8]">
            motio<span className="special-font">n</span>
          </h1>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 z-0">
        <h1 className="uppercase font-zentry-regular text-8xl md:text-[140px] lg:text-[180px] text-black leading-[0.8]">
          motio<span className="special-font">n</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
