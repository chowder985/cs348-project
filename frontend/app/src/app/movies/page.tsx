'use client'

import _api from "../_api"
import { useEffect, useState } from "react"
import { ResponseMovieDTO } from "../_dto/movie.dto";
import { useRouter } from 'next/navigation';

export default function Movies() {
    const [movies, setMovies] = useState([] as ResponseMovieDTO[])
    const router = useRouter()

    useEffect(() => {
        _api.movie.getMovies().then(res => {
            setMovies(res.movies)
        })
    }, [])

    return (
        <div>
            <h1>Movies</h1>
            <table className='border-2 border-solid border-white'>
                <thead className='border-2 border-solid border-white'>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Director</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                        <th>Genres</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie.id} onClick={() => router.push(`/movies/${movie.id}`)}>
                            <td className='border-2 border-solid border-white p-2'>{movie.id}</td>
                            <td className='border-2 border-solid border-white p-2'>{movie.title}</td>
                            <td className='border-2 border-solid border-white p-2'>{movie.director}</td>
                            <td className='border-2 border-solid border-white p-2'>{new Date(movie.release_date).toDateString()}</td>
                            <td className='border-2 border-solid border-white p-2'>{movie.rating}</td>
                            <td className='border-2 border-solid border-white p-2'>{movie.genres.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a href="/movies/new" className="me-3">Add Movie</a>
            <a href="/movies/report">Create Report</a>
        </div>
    )
}