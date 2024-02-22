import connectDB from "@/lib/mongodb";
import Product from "@/models/ProductModels";
import {NextResponse} from "next/server";

export async function POST(request) {
    try {
        const { name, price, category } = await request.json();
        await connectDB();
        await Product.create({
          name,
          price,
          category,
        });

        return NextResponse.json(
          {
            message: "Product created successfully",
          },
          {
            status: 201,
          }
        );
    } catch (error) {
        console.error("Error creating product:", error);
        return NextResponse.json(
          {
            error: "Failed to create a Product",
          },
          {
            status: 500,
          }
        );
    }
    
}


export async function GET() {
    await connectDB();
    const products = await Product.find();
    return NextResponse.json({
        products
    });
}

export async function DELETE(request) {
  try {
      const id = request.nextUrl.searchParams.get("id");
      await connectDB();
      await Product.findByIdAndDelete(id);
      return NextResponse.json({ message: "Product deleted" }, { status: 200 });

  } catch (error) {
    console.log(error);
  }
}