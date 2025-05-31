import { NextResponse } from "next/server";
import { retrieveData } from "@/lib/firebase/service";

export async function GET() {
  try {
    const products = await retrieveData("products");

    return NextResponse.json({ status: 200, success: true, data: products });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to fetch products",
      error,
    });
  }
}
