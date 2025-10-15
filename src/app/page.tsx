"use client";
import { type Task } from "@/server/db/schema";

import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false);

  const [createdTask, setCreatedTask] = useState<Task>({} as Task);

  useEffect(() => {
    fetch("/api/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, dueDate, completed }),
    });
    if (response.ok) {
      setName("");
      setDescription("");
      setDueDate("");
      setCompleted(false);
    }
  };

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="dueDate">Due Date</label>
          <input type="date" id="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="completed">Completed</label>
          <input type="checkbox" id="completed" value={completed.toString()} onChange={(e) => setCompleted(e.target.checked)} />
        </div>
        <button type="submit">Create Task</button>
      </form>

    </div>
    <div>
      <h1>DB Fundamentals</h1>
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="border-2 border-gray-300 p-4 rounded-md">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.dueDate ? new Date(task.dueDate).toDateString() : "No due date"}</p>
            <p>{task.completed ? "Completed" : "Not completed"}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
