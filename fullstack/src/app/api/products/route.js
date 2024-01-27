import {NextResponse} from "next/server";

export async function GET(req) {
  // Url query params
  const { searchParams } = new URL(req.url);
  console.log(searchParams);
  // URLSearchParams { 'search' => '"c++"' }

  return NextResponse.json({ msg: "Hello" });
}

export async function POST(req) {
  
    // Get data from frontend 
    const res = await req.json()
    console.log(res);

  return NextResponse.json({ msg: "Post " });
}