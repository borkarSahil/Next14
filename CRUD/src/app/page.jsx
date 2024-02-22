import ProductModel from "@/models/ProductModels";
import Image from "next/image";
import ProductList from "@/Components/ProductList";

export default function Home() {
  return (
    <>
      <div>
        TODOS
        <ProductList />
      </div>
    </>
  );
}
