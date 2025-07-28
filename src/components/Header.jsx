import { useRef, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import Button from './Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const navItems = ['about', 'work', 'story', 'contact'];
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
    if (!isAudioPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useGSAP(() => {
    const showHeader = gsap
      .from('header', {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    const hideNavBg = gsap
      .to('#nav-bg', {
        backgroundColor: 'transparent',
        duration: 0.2,
        paused: true,
      })
      .progress(1);

    ScrollTrigger.create({});

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        self.direction === -1 ? showHeader.play() : showHeader.reverse();
        self.progress === 0 ? hideNavBg.play() : hideNavBg.reverse();
      },
    });
  });
  return (
    <header className="fixed inset-x-0 z-99 p-4">
      <div id="nav-bg" className="bg-black rounded-lg px-4 py-2">
        <nav className="flex items-center justify-between gap-2 md:gap-4">
          <div className="flex items-center justify-center gap-2 md:gap-4 shrink-0">
            <a href="#hero">
              <img
                src="/images/mythology-logo-new.png"
                alt="logo"
                className="h-10"
              />
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 md:gap-12">
            <div className="items-center justify-center gap-6 md:gap-12 hidden sm:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="nav-hover-effect font-robert-regular text-xs uppercase text-white"
                >
                  {item}
                </a>
              ))}
            </div>
            <a href="#contact" className="inline-block sm:hidden">
              <Button
                text="get in touch"
                containerClass="bg-neonViolet-300 text-white"
                leftIcon={
                  <Icon icon="ion:paper-plane" width="16" height="16" />
                }
              />
            </a>
            <button
              aria-label="play audio"
              onClick={toggleAudio}
              className="cursor-pointer group"
            >
              <audio
                src="/audio/loop.mp3"
                className="hidden"
                ref={audioRef}
                loop
              />
              <div className="flex gap-[3px]">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className={`audio-btn-line h-[10px] w-[1px] bg-white transition-all origin-bottom group-hover:animate-(--line-animation) ${
                      isAudioPlaying ? 'animate-(--line-animation)' : ''
                    }`}
                    style={{ '--animation-delay': index }}
                  />
                ))}
              </div>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
