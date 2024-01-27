import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import PostModel from "@/models/Post";

export async function GET(req) {
  try {
    await connectDB();
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts = await res.json();

    return NextResponse.json({ data: posts });
  } catch (error) {
    return NextResponse.json({ msg: "failed" });
  }
}
