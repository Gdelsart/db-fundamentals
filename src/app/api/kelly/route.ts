import { db } from "@/server/db";
import { aiProjects } from "@/server/db/schema";
import { NextResponse } from "next/server";

export async function GET () {
    const fetchedAiProjects = await db.select().from(aiProjects);
    return NextResponse.json(fetchedAiProjects);
}