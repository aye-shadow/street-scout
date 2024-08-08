import {NextResponse} from "next/server";
import {z} from "zod";
import axios from "axios";
import {BACKEND_API_URL, VendorProfile} from "@/features/vendor";

export async function GET(request: Request, { params }: {
  params: {
    id: number
  }
}) {
  try {
    const id = Number(params.id);

    console.log("💫vendor-id", id, typeof id);

    const { data, status } = await axios.get<VendorProfile>(
      `${BACKEND_API_URL}/api/vendors/${id}`
    )
    return NextResponse.json(data, { status });
  } catch (e: any) {
    console.error("Unhandled Error:", e.message);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = (await request.json()) as { name: string };

  try {
    const bodySchema = z.object({
      name: z.string().min(1).trim().toLowerCase(),
    });

    const zod = bodySchema.safeParse(body);

    if (!zod.success) {
      return NextResponse.json({ error: zod.error }, { status: 400 });
    }

    return NextResponse.json("Not implemented", { status: 200 });
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.message);
      return NextResponse.json(
        { error: error.response?.data || "Unknown error" },
        { status: error.response?.status || 500 },
      );
    } else {
      console.error("Unhandled Error:", error);
      return NextResponse.json({ error: "Unhandled error" }, { status: 500 });
    }
  }
}
