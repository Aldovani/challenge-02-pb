import { ProductList } from "../Components/ProductList";

export function Products() {
  return (
    <>
      <main className="bg-wisper  py-28  px-8">
        <div className="container mx-auto ">
          <h1 className="font-eb-garamond text-primary-lunar-green font-bold sm:text-64 text-4xl">
            Products
          </h1>
          <p className="max-w-[500px] mt-4 sm:text-base text-sm font-raleway text-secondary-secondary">
            Explore our diverse range of plants, from vibrant indoor greens to
            stunning outdoor blooms. Find the perfect additions to bring life
            and beauty to your space. Happy planting!
          </p>
        </div>
      </main>
      <section className="bg-white py-20">
        <div className="container  mx-auto">
          <ProductList />
        </div>
      </section>
    </>
  );
}
