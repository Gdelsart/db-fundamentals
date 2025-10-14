import { db } from "@/server/db";
import { tasks } from "@/server/db/schema";
import { NextResponse } from "next/server";

export async function GET () {
    const fetchedTasks = await db.select().from(tasks);
    return NextResponse.json(fetchedTasks);
}

export async function POST (request: Request) {
    const newTask = await request.json();

    const createdTask = await db.insert(tasks).values({
        title: newTask.name,
        description: newTask.description,
        dueDate: new Date(newTask.dueDate),
        completed: newTask.completed,
    }).returning();

    return NextResponse.json(createdTask, { status: 201});
}