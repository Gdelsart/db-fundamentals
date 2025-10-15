import { db } from "@/server/db";
import { movies } from "@/server/db/schema";
import { NextResponse } from "next/server";

export async function GET () {
    const fetchedMovies = await db.select().from(movies);
    return NextResponse.json(fetchedMovies);
}