import leftPlant from "../assets/leftPlant.png";
import image23 from "../assets/image23.png";

const HeroHome = () => {
  return (
    <div>
      <header>Talita</header>
      <div className="flex flex-col md:flex-row items-center justify-between p-8">
        <section className="max-w-xl mb-8 md:mb-0">
          <hr className="border border-black" />
          <h2 className="text-lg font-bold">Love for Nature</h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-green-900">
            Discover Your <span className="text-green-700">Green</span> Side
          </h1>
          <p className="text-base mt-4">
            We are your one-stop destination for all things green and growing.
            Our website offers a wide array of stunning plants, ranging from
            vibrant flowers to lush indoor foliage, allowing you to create your
            very own green oasis.
          </p>
          <button className="bg-green-900 text-white py-2 px-4 mt-6 text-lg">
            Everton
          </button>
          <img
            src={leftPlant}
            alt="Left Plant"
            className="absolute bottom-0 left-0 w-24 md:w-32 grayscale"
          />
          <a href="#" className="block text-gray-800 mt-4 text-sm">
            Learn Gardening →
          </a>
        </section>
        <section className="relative flex flex-col items-center md:items-end">
          <img
            src={image23}
            alt="Right Plant"
            className="w-48 md:w-80 grayscale mix-blend-multiply"
          />
        </section>
      </div>
    </div>
  );
};

export default HeroHome;
