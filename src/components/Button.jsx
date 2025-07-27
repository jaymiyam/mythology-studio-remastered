const Button = ({ id, text, leftIcon, rightIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 cursor-pointer w-fit overflow-hidden rounded-full px-6 py-2 text-black text-sm font-robert-regular uppercase flex items-center justify-center gap-1 ${containerClass}`}
    >
      {leftIcon}
      <span className="relative overflow-hidden inline-flex">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {text}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {text}
        </div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
