import { ProductLoadItem } from "./item";

export function ProductLoadList() {
  const numberOfElements = new Array(20).fill(() => "");

  return (
    <>
      {numberOfElements.map((_, index) => (
        <ProductLoadItem key={index} />
      ))}
    </>
  );
}
