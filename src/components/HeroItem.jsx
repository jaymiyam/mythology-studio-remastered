const HeroItem = ({ video, poster, isPreview, ref }) => {
  const hoverStyles = 'opacity-0';
  return (
    <div
      ref={ref}
      className={`overflow-hidden absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] transition-all ${
        isPreview ? hoverStyles : ''
      }`}
    >
      <video
        muted
        loop
        playsInline
        src={video}
        poster={poster}
        className="object-cover object-center origin-center w-screen min-h-full"
      />
    </div>
  );
};

export default HeroItem;
