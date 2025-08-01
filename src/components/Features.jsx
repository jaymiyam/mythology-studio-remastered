import React from 'react';
import TiltWrapper from './TiltWrapper';
import VideoCard from './VideoCard';
import { Icon } from '@iconify/react/dist/iconify.js';

const Features = () => {
  return (
    <section id="work" className="bg-black py-40">
      <div className="container mx-auto px-4 md:px-12">
        <div className="font-circular-web max-w-[45ch] mb-20">
          <p className="text-white text-xl">Who We Are</p>
          <p className="text-zinc-400">
            Mythology is a boutique motion design studio focuses on crafting
            stunning animations that ignite emotions, tell unforgettable
            stories.
          </p>
        </div>
        <TiltWrapper classes="w-full h-96">
          <VideoCard
            video="videos/work-clip-11.mp4"
            poster="images/work-clip-11-poster.png"
            title="2D/3D Animation"
            description="We turn your ideas into stunning motion graphics with top-notch technologies."
          />
        </TiltWrapper>
        <div className="w-full h-[180vh] md:h-[140vh] grid grid-cols-2 md:grid-rows-3 gap-5 my-5">
          <TiltWrapper classes="col-span-2 md:col-span-1 row-span-2">
            <VideoCard
              video="videos/work-clip-6.mp4"
              poster="images/work-clip-6-poster.png"
              title="Post Processing"
              description="Meticulous and detail-oriented post processing workflow to produces the highest quality outcome."
            />
          </TiltWrapper>
          <TiltWrapper classes="col-span-2 md:col-span-1 row-span-1">
            <VideoCard
              isWhiteText
              video="videos/work-clip-3.mp4"
              poster="images/work-clip-3-poster.png"
              title="CGI"
              description="Anything is possible. Imagination is the limit."
            />
          </TiltWrapper>
          <TiltWrapper classes="col-span-2 md:col-span-1 row-span-1">
            <VideoCard
              video="videos/work-clip-4.mp4"
              poster="images/work-clip-4-poster.png"
              title="Audio"
              description="The best motion graphic will exceed itself with the greatest audio,"
            />
          </TiltWrapper>
          <TiltWrapper classes="col-span-1 row-span-1 bg-neonViolet-300">
            <div className="size-full p-5 flex flex-col md:flex-row justify-between">
              <h2 className="font-zentry-regular uppercase text-black text-5xl sm:text-7xl max-w-64 leading-[0.8]">
                more coming soon
              </h2>
              <Icon
                icon="ion:paper-plane"
                width="80"
                height="80"
                className="self-end"
              />
            </div>
          </TiltWrapper>
          <TiltWrapper classes="col-span-1 row-span-1 bg-neonViolet-300">
            <video
              className="absolute inset-0 z-10 size-full object-cover object-center"
              src="videos/work-clip-13.mp4"
              poster="images/work-clip-13-poster.png"
              muted
              loop
              autoPlay
              playsInline
            />
          </TiltWrapper>
        </div>
      </div>
    </section>
  );
};

export default Features;
