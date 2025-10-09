import { db } from "@/server/db";
import { gabesFavorites } from "@/server/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
    const fetchedGabesFavorites = await db.select().from(gabesFavorites);
    return NextResponse.json(fetchedGabesFavorites);
}