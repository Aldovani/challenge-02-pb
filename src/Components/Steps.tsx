import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Steps = () => {
  return (
    <section className="flex flex-col m-auto mt-20 md:m-20 md:mb-30 bg-white">
      <div className="flex flex-col m-auto text-center w-7/12">
        <h1 className="text-xl2 md:text-xl font-bold font-eb-garamond text-primary-lunar-green">
            Steps To Take Care Of Your <span className="text-primary-avacado">Plants</span></h1>
        <p className="text-xs font-raleway mb-20 text-dark-gray">
          By following these three steps - proper watering, appropriate
          sunlight, and providing essential nutrients - you'll be well on your
          way to maintaining healthy and thriving plants.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row w-full justify-between">
        <div className="w-72 flex m-auto md:mt-0 md:w-96">
        <img src={img1} alt="Imagem de um ambiente interno com muitas folhagens" />
        </div>
        
        <div className="w-72 flex m-auto md:mt-0 md:w-96">
        <img src={img2} alt="Imagem de um ambiente externo com muitas folhagens" />
        </div>
       
        <div className="w-72 flex flex-col m-auto md:mt-0 md:w-96">
          <img src={img3} alt="Imagem de uma janela redonda com um bonsai" />
          <p className="text-sm mt-6 leading-6 text-secondary-secondary">
            Our website offers a wide array of stunning plants, ranging from
            vibrant flowers to lush indoor foliage, allowing you to create your
            very own green oasis. In addition to our extensive plant selection,
            we also provide gardening kits and fertilizers to equip you with
            everything you need to nurture your plants and achieve gardening
            success. But we don't stop there! We believe that knowledge is the
            key to a thriving garden, so we offer a wealth of information and
            resources on gardening techniques, plant care tips, and landscaping
            ideas. Whether you're a seasoned gardener or just starting your
            green journey, our goal is to inspire and support you every step of
            the way. Get ready to explore our virtual garden and discover the
            joys of gardening with us!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
