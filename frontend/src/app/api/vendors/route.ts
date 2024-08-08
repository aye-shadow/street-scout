import { NextResponse } from "next/server";
import {BACKEND_API_URL, VendorList} from "@/features/vendor";
import axios from "axios";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const page = Number(searchParams.get("page")) || 0;
    const size = Number(searchParams.get("size")) || 20;

    const { data: allVendors, status} = await axios.get<VendorList>(
      `${BACKEND_API_URL}/api/vendors?page=${page}&size=${size}`);

    return NextResponse.json(allVendors, { status });
  } catch (e: any) {
    console.error("Unhandled Error:", { e });
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

