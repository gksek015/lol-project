import { fetchChampionList } from "@/utils/serverApi";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await fetchChampionList();
    return NextResponse.json(data);
  } catch (error:any) {
    return NextResponse.json(
        {error: error.message},
        {status: 500}
    )
  }
}
