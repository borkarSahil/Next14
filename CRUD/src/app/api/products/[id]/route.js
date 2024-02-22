import connectDB from "@/lib/mongodb";
import Product from "@/models/ProductModels";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
      await connectDB();
      const { id } = params;
      const product = await Product.findById(id);
      return NextResponse.json({
        product,
      },
      {
        status:200
      });
  } catch (error) {
    console.error("Error Getting product:", error);
  }

}

export async function PUT(request, {params}) {
  try {
    const {id} = params;
    const { newName: name, newPrice : price, newCategory: category } = await request.json();
    // console.log(newName, newPrice, newCategory);
    await connectDB();

    await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        category
      }
    );
    

    return NextResponse.json(
      {
        message: "Product Updated successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error Editing product:", error);
    return NextResponse.json(
      {
        error: "Failed to Edit a Product",
      },
      {
        status: 500,
      }
    );
  }
}

