import { ProductItem } from "./productItem";
import { ProductLoadList } from "./Loading";
import { useProductList } from "./useProductList";

export function ProductList() {
  const { plants, isLoading, error } = useProductList();

  return (
    <>
      <ul className="grid  place-items-center sm:px-0 px-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-10">
        {plants &&
          plants.map((plant, index) => (
            <ProductItem plant={plant} key={index} />
          ))}

        {!error && isLoading && <ProductLoadList />}
      </ul>
      {}
      <div id="end-of-page" className="h-20 w-full"></div>
    </>
  );
}
