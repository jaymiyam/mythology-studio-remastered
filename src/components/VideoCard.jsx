import { useRef } from 'react';

const VideoCard = ({ video, poster, title, description, isWhiteText }) => {
  const videoRef = useRef(null);

  const hoverIn = () => {
    videoRef.current.play();
  };

  const hoverOut = () => {
    videoRef.current.pause();
  };
  return (
    <div
      className="relative size-full p-5"
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 z-10 size-full object-cover object-center"
        src={video}
        poster={poster}
        muted
        loop
        playsInline
      />
      <div className="relative h-full z-20 flex flex-col justify-between">
        <div>
          <h2 className="font-zentry-regular uppercase text-neonYellow-300 text-6xl mb-4">
            {title}
          </h2>
          <p
            className={`font-robert-regular text-base max-w-[25ch] leading-5 ${
              isWhiteText ? 'text-babyBlue-50' : 'text-slate-800'
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
