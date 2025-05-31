import { NextResponse } from "next/server";
import { retrieveData } from "@/lib/firebase/service";

export async function GET() {
  try {
    const services = await retrieveData("services");

    return NextResponse.json({ status: 200, success: true, data: services });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to fetch services",
      error,
    });
  }
}
