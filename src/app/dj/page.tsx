"use client"
import { useEffect, useState } from "react";
import { type User } from "@/server/db/schema";

export default function DJPage() {
    // Declared my state variable to store the users returned from the API
    const [users, setUsers] = useState<User[]>([]);
    
    // UseEffect to fetch the users from the API
    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch("/api/DJ");
            const data = await response.json();
            setUsers(data);
        }
        fetchUsers();
    }, []);
    return <div className="flex flex-col gap-4">
        <h1>Users</h1>
        {/* Mapping over the users and displaying the data */}
        {users.map((user) => (
            <div key={user.id} className="border-2 border-gray-300 p-4 rounded-md">
                <h2>{user.username}</h2>
                <p>{user.email}</p>
                <p>Created At: {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
        ))}

    </div>; 
}