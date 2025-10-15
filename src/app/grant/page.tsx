"use client";

import { useEffect, useState } from "react";
import { type Movie } from "@/server/db/schema";

export default function GrantPage() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        fetch("/api/grant")
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []);

    return (
        <>
        {movies.map((movie) => (
            <div key={movie.id} className="border-2 border-gray-300 p-4 rounded-md">
                <h2>{movie.title}</h2>
                <p>{movie.director}</p>
                <p>{movie.genre}</p>
                <p>{movie.releaseYear ? new Date(movie.releaseYear).toLocaleDateString() : "No release year"}</p>
                <p>{movie.rating}</p>
                <p>{movie.imdbRating}</p>
                <p>{movie.description}</p>
                <p>{movie.posterUrl}</p>
            </div>
        ))}
        </>
    )
}