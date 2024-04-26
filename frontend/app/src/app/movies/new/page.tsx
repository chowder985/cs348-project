'use client'

import React, { useState, useEffect, use } from 'react'
import _api from '../../_api';
import { useRouter } from 'next/navigation';

export default function NewMoviePage() {
    const [title, setTitle] = useState('New Movie')
    const [director, setDirector] = useState('Ilhoon Lee')
    const [releaseDate, setReleaseDate] = useState(new Date(Date.now()))
    const [genres, setGenres] = useState('Action')
    const [rating, setRating] = useState(0)
    const router = useRouter()

    async function createMovie() {
        const res = await _api.movie.createMovie({
            title: title,
            director: director,
            release_date: releaseDate.toDateString(),
            genres: genres.split(',').map(e => e.trim()),
            rating: rating,
        })
        router.push(`/movies`)
    }

    return (
        <div>
            <h1>New Movie</h1>
            <div>
                <div className="p-2">
                    <label htmlFor="title" className="me-2">Title</label>
                    <input type="text" name="title" id="title" className="text-black" onChange={e => {setTitle(e.target.value)}} />
                </div>
                <div className="p-2">
                    <label htmlFor="director" className="me-2">Director</label>
                    <input type="text" name="director" id="director" className="text-black" onChange={e => {setDirector(e.target.value)}} />
                </div>
                <div className="p-2">
                    <label htmlFor="releaseDate" className="me-2">Release Date</label>
                    <input type="date" name="release_date" id="releaseDate" className="text-black" onChange={e => {setReleaseDate(new Date(e.target.value))}} />
                </div>
                <div className="p-2">
                    <label htmlFor="genre" className="me-2">Genres</label>
                    <input type="text" name="genre" id="genre" className="text-black" onChange={e => {setGenres(e.target.value)}} />
                </div>
                <div className="p-2">
                    <label htmlFor="rating" className="me-2">Rating</label>
                    <input type="number" name="rating" id="rating" className="text-black" onChange={e => {setRating(Number.parseInt(e.target.value))}} />
                </div>
                <button onClick={() => createMovie()}>Save</button>
            </div>
        </div>
    )
}