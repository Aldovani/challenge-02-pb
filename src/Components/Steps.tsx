import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Steps = () => {
  return (
    <section>
      <div>
        <h1>Steps To Take Care Of Your Plants</h1>
        <p>
          By following these three steps - proper watering, appropriate
          sunlight, and providing essential nutrients - you'll be well on your
          way to maintaining healthy and thriving plants.
        </p>
      </div>

      <div>
        <img src={img1} alt="Imagem de um ambiente interno com muitas folhagens" />
        <img src={img2} alt="Imagem de um ambiente externo com muitas folhagens" />
        <div>
          <img src={img3} alt="Imagem de uma janela redonda com um bonsai" />
          <p>
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
