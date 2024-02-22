"use client";

import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeProduct = async () => {
    const confirmed = confirm("Are you sure?");

    try {
          if (confirmed) {
            const res = await fetch(
              `http://localhost:3000/api/products?id=${id}`,
              {
                method: "DELETE",
              }
            );

            if (res.ok) {
              router.refresh();
            }
          }
    } catch (error) {
      console.log("Delete", error);
    }
  };

  return (
    <button onClick={removeProduct} className="btn btn-error ml-2">
      Delete
    </button>
  );
}
