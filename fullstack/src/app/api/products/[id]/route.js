import { NextResponse } from "next/server";

export async function GET(req, {params}) {

  console.log("Context: " + params );
  

  return NextResponse.json({ msg: "Id" });
}
