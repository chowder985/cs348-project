'use client'

import React, { useState, useEffect } from 'react'
import _api from '../../_api';
import { useRouter } from 'next/navigation';

export default function MoviePage({ params }: { params: { id: string } }){
    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [releaseDate, setReleaseDate] = useState(new Date(Date.now()))
    const [genres, setGenres] = useState('')
    const [rating, setRating] = useState(0)
    const router = useRouter()

    useEffect(() => {
        _api.movie.getMovie(params.id).then(res => {
            setTitle(res.movie.title)
            setDirector(res.movie.director)
            setReleaseDate(new Date(res.movie.release_date))
            setGenres(res.movie.genres.join(', '))
            setRating(res.movie.rating)
        })
    }, [])

    async function updateMovie() {
        await _api.movie.updateMovie(params.id, {
            title: title,
            director: director,
            release_date: releaseDate.toDateString(),
            genres: genres.split(',').map(e => e.trim()),
            rating: rating,
        })
        router.push(`/movies`)
    }

    function deleteMovie() {
        _api.movie.deleteMovie(params.id)
        router.push('/movies')
    }

    return (
        <div>
            <h1>Edit Movie</h1>
            <div>
                <div className="p-2">
                    <label htmlFor="title" className="me-2">Title</label>
                    <input type="text" name="title" id="title" value={title} className="text-black" onChange={e => {setTitle(e.target.value)}} />
                </div>
                <div className="p-2">
                    <label htmlFor="director" className="me-2">Director</label>
                    <input type="text" name="director" id="director" value={director} className="text-black" onChange={e => {setDirector(e.target.value)}} />
                </div>
                <div className="p-2">
                    <label htmlFor="releaseDate" className="me-2">Release Date</label>
                    <input type="date" name="release_date" id="releaseDate" value={releaseDate.toISOString().split('T')[0]} className="text-black" onChange={e => {setReleaseDate(new Date(e.target.value))}} />
                </div>
                <div className="p-2">
                    <label htmlFor="genre" className="me-2">Genre</label>
                    <input type="text" name="genre" id="genre" value={genres} className="text-black" onChange={e => {setGenres(e.target.value)}} />
                </div>
                <div className="p-2">
                    <label htmlFor="rating" className="me-2">Rating</label>
                    <input type="number" name="rating" id="rating" value={rating} className="text-black" onChange={e => {setRating(Number.parseInt(e.target.value))}} />
                </div>
                <button className='me-3' onClick={() => updateMovie()}>Save</button>
                <button onClick={() => deleteMovie()}>Delete</button>
            </div>
        </div>
    )
}