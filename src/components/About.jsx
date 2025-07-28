import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.set('#about-image', {
      rotateX: 10,
      rotateY: -30,
      rotateZ: -10,
      borderRadius: '1rem',
    });

    const imageExpand = gsap.to('#about-image', {
      width: '100%',
      height: '100%',
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      borderRadius: 0,
    });

    ScrollTrigger.create({
      animation: imageExpand,
      trigger: '#about-image-cont',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      pin: true,
      pinSpacing: true,
    });
  });

  return (
    <section
      id="about"
      className="mt-36 md:mt-48 flex flex-col gap-10 items-center justify-center text-center"
    >
      <p className="uppercase text-xs">Welcome to Mythology</p>
      <AnimatedTitle>
        <h2 className="px-4 uppercase text-7xl md:text-8xl text-black text-balance font-zentry-regular leading-[0.8] max-w-[16ch]">
          We bri<span className="special-font">n</span>g m
          <span className="special-font">a</span>gic to y
          <span className="special-font">o</span>ur st
          <span className="special-font">o</span>ries
        </h2>
      </AnimatedTitle>
      <div id="about-image-cont" className="relative w-full h-dvh">
        <div
          id="about-image"
          className="absolute top-1/2 left-1/2 -translate-[50%] z-10 overflow-hidden border border-black w-96 h-[60vh]"
        >
          <img
            src="/images/yeti-1.jpg"
            className="object-cover size-full origin-center"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
