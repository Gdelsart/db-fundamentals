import { db } from "@/server/db";
import { tasks } from "@/server/db/schema";
import { NextResponse } from "next/server";

export async function GET () {
    const fetchedTasks = await db.select().from(tasks);
    return NextResponse.json(fetchedTasks);
}