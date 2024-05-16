import leftPlant from "../assets/leftPlant.png";
import image23 from "../assets/image23.png";

const HeroHome = () => {
  return (
    <div className="bg-athena-grey pl-20 pr-10 pb-36 relative">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <section className="max-w-xl relative mt-20">
          <div className="flex items-center mb-5">
            <hr className="w-8 border-t-4 border-black mr-5" />
            <h2 className="text-lg font-bold font-pacifico">Love for Nature</h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 text-primary-lunar-green font-eb-garamond md:leading-snug">
            Discover Your <span className="text-primary-avacado">Green</span>{" "}
            Side
          </h1>
          <p className="text-base mt-4 text-secondary-secondary font-raleway">
            We are your one-stop destination for all things green and growing.
            Our website offers a wide array of stunning plants, ranging from
            vibrant flowers to lush indoor foliage, allowing you to create your
            very own green oasis.
          </p>
          <button className="bg-primary-lunar-green text-white py-2 px-8 mt-6 text-lg font-raleway">
            Everton
          </button>
          <a
            href="#"
            className="relative text-secondary-secondary text-sm md:block font-raleway "
          >
            Learn Gardening →
          </a>
        </section>
        <section>
          <img
            src={leftPlant}
            alt="Left Plant"
            className="absolute left-0 bottom-0 w-36 mix-blend-luminosity hidden lg:block"
          />
        </section>
        <section>
          <img
            src={image23}
            alt="Right Plant"
            className="absolute right-0 bottom-0 mix-blend-luminosity brightness-90 hidden lg:block"
          />
        </section>
      </div>
    </div>
  );
};

export default HeroHome;
