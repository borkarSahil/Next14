

import EditProductForm from "@/Components/EditForm";

const getProductById = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/products/${id}`,
      {
        cache: "no-store",
      }
    );
    console.log("Res in edit", res);

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null; 
  }
};

export default async function EditProduct({ params }) {
  const { id } = params;
  const  {product} = await getProductById(id);
  console.log("p",product.name);
  const { name, price, category } = product;

  return (
    <EditProductForm
      id={id}
      name={name}
      price={price}
      category={category}
    />
    // <h1>K</h1>
  );
}