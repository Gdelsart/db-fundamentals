"use client";

import { useEffect, useState } from "react";
import { type AiProject } from "@/server/db/schema";
import Link from "next/link";

export default function KellyPage() {
    // Declared my state variable to store the AI projects returned from the API
    const [aiProjects, setAiProjects] = useState<AiProject[]>([]);

    // UseEffect to fetch the AI projects from the API
    useEffect(() => {
        fetch("/api/kelly")
            .then(res => res.json())
            // And then updating the state variable with the data fetched
            .then(data => setAiProjects(data));
    }, []);
    return <div className="flex flex-col gap-4">
        <h1>Team&apos;s AI Projects</h1>
        {/* Mapping over the AI projects and displaying the data */}
        {aiProjects.map((aiProject) => (
            <div key={aiProject.id} className="border-2 border-gray-300 p-4 rounded-md">
                <h2>{aiProject.name}</h2>
                <p>{aiProject.description}</p>
                {/* Mapping over the stack and displaying only the name of the stack comma separated */}
                <p>{aiProject.stack?.map((stack) => stack.name).join(", ")}</p>
                <p>{aiProject.status}</p>
                {/* Here, I am conditionally displaying the repository as a link if it exists */}
                {aiProject.repository && <p><Link href={aiProject.repository} target="_blank" rel="noopener noreferrer">{aiProject.repository}</Link></p>}
            </div>
        ))}
    </div>;
}