import { ProductItem } from "./productItem";
import { ProductLoadList } from "./Loading";
import { useProductList } from "./useProductList";

export function ProductList() {
  const { plants, isLoading, error, currentPage, lastPage } = useProductList();

  return (
    <>
      <ul className="grid  place-items-center sm:px-0 px-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-10">
        {plants &&
          plants.map((plant, index) => (
            <ProductItem plant={plant} key={index} />
          ))}

        {!error && isLoading && <ProductLoadList />}
      </ul>
      {currentPage === lastPage && (
        <div className="flex items-center justify-center mt-20">
          <span className="font-raleway text-secondary-secondary">You've Reached the End!</span>
        </div>
      )}
      <div id="end-of-page" className="h-20 w-full"></div>
    </>
  );
}
