'use client'

import React, { useState, useEffect } from 'react';
import _api from '../../_api';
import { ResponseMovieDTO, ReportRequestDTO } from "../../_dto/movie.dto";

export default function newReport() {
    const [generatedReport, setGeneratedReport] = useState([] as ResponseMovieDTO[])
    const [directors, setDirectors] = useState<string[]>([])
    const [director, setDirector] = useState('All')
    const [releaseSDate, setReleaseSDate] = useState(new Date())
    const [releaseEDate, setReleaseEDate] = useState(new Date())
    const [genres, setGenres] = useState(new Array())
    const [genre, setGenre] = useState(new Array())
    const [minRating, setMinRating] = useState(1)
    const [maxRating, setMaxRating] = useState(10)

    useEffect(() => {
        _api.movie.getDirectors().then(res => {
            setDirectors(res.directors)
        })
        _api.movie.getGenres().then(res => {
            setGenres(res.genres)
            setGenre(new Array(res.genres.length).fill(false))
        })
    }, [])

    function handleMultipleGenre(index: number) {
        let newGenre = genre
        newGenre[index] = !newGenre[index]
        setGenre(newGenre)
    }

    function createReport() {
        const report: ReportRequestDTO = {
            director: director,
            genre: genres.filter((_, index) => genre[index]),
            releaseSDate: releaseSDate.toLocaleDateString(),
            releaseEDate: releaseEDate.toLocaleDateString(),
            minRating: minRating,
            maxRating: maxRating,
        }
        _api.movie.createReport(report).then(res => {
            setGeneratedReport(res.movies)
        })
    }

    return (
        <div>
            {generatedReport.length > 0 ?
            <div>
                <h1>Report</h1>
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
                        {generatedReport.map((movie, index) => <tr key={index}>
                            <td className='border-2 border-solid border-white p-2'>{movie.id}</td>
                            <td className='border-2 border-solid border-white p-2'>{movie.title}</td>
                            <td className='border-2 border-solid border-white p-2'>{movie.director}</td>
                            <td className='border-2 border-solid border-white p-2'>{new Date(movie.release_date).toDateString()}</td>
                            <td className='border-2 border-solid border-white p-2'>{movie.rating}</td>
                            <td className='border-2 border-solid border-white p-2'>{movie.genres.join(', ')}</td>
                        </tr>)}
                    </tbody>
                </table>
                <a href="/movies/report" className="me-3">Go Back</a>
                <a href="/movies/">Main Page</a>
            </div>
            : 
            <div>
                <h1>Create Report</h1>
                <div>
                    <div className="p-2">
                        <label htmlFor="director" className="me-2">Director</label>
                        <select name="director" id="director" className="text-black" onChange={e => {setDirector(e.target.value)}}>
                            <option value="all">All</option>
                            {directors.map((director, index) => <option key={index} value={director}>{director}</option>)}
                        </select>
                    </div>
                    <div className="p-2">
                        <label htmlFor="releaseSDate" className="me-2">Release Date</label>
                        <input type="date" name="release_sdate" id="releaseSDate" className="text-black" onChange={e => {setReleaseSDate(new Date(e.target.value))}} />
                        <span> ~ </span>
                        <input type="date" name="release_edate" id="releaseEDate" className="text-black" onChange={e => {setReleaseEDate(new Date(e.target.value))}} />
                    </div>
                    <div className="p-2">
                        <label htmlFor="genre" className="me-2">Genres</label>
                        {genres.map((name, index) => <div key={index}>
                            <input type="checkbox" name="genre" id={name} value={name} className="text-black" onChange={e => {handleMultipleGenre(index)}} />
                            <label htmlFor={name} className="ms-2">{name}</label>
                        </div>)}
                    </div>
                    <div className="p-2">
                        <label htmlFor="rating" className="me-2">Rating</label>
                        <input type="number" name="rating" id="rating" className="text-black" value={minRating} min="1" max="10" onChange={e => {setMinRating(Number.parseInt(e.target.value))}} />
                        <span> ~ </span>
                        <input type="number" className="text-black" value={maxRating} min="1" max="10" onChange={e => {setMaxRating(Number.parseInt(e.target.value))}} />
                    </div>
                    <button onClick={() => createReport()}>Generate Report</button>
                </div>
            </div>
            }
        </div>
    );
}