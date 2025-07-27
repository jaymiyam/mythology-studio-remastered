import AnimatedTitle from './AnimatedTitle';
import Button from './Button';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-screen py-20 md:py-30 px-4 bg-babyBlue-50"
    >
      <div className="relative bg-[url('images/yeti-3.jpg')] bg-center bg-cover bg-no-repeat rounded-xl px-4 py-20 ">
        {/* <div className="absolute top-0 -left-16 md:left-0 w-[500px] h-full">
          <div className="contact-clip-path-1">
            <img src="images/work-clip-1-poster.png" />
          </div>
          <div className="contact-clip-path-2">
            <img src="images/work-clip-5-poster.png" />
          </div>
        </div>
        <div className="absolute top-0 -right-12 md:right-10 h-full w-96 ">
          <div className="absolute md:scale-125 swordman-clip-path">
            <img src="images/yeti-3.jpg" />
          </div>
        </div> */}
        <div className="relative z-80 flex flex-col items-center justify-center gap-5">
          <p className="uppercase text-xs text-white">get in touch</p>
          <AnimatedTitle>
            <h2 className="uppercase text-8xl text-white text-center text-pretty font-zentry-regular leading-[0.8] max-w-[16ch]">
              Unloc<span className="special-font">k</span> all the potential you
              <span className="special-font">r</span> stories h
              <span className="special-font">o</span>ld
            </h2>
          </AnimatedTitle>
          <Button
            id="contact-us"
            text="contact us"
            containerClass="bg-neonYellow-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
