import axios from "axios";
import { MovieDTO, ReportRequestDTO } from "../_dto/movie.dto";

const endpoint = `http://localhost:8081`

async function createMovie(newMovie: MovieDTO) {
    try {
        console.log(newMovie)
        return (await axios.post(`${endpoint}/movies`, newMovie)).data
    } catch (error) {
        console.error(error)
    }
}

async function getMovies() {
    try {
        return (await axios.get(`${endpoint}/movies`)).data
    } catch (error) {
        console.error(error)
    }
}

async function getMovie(id: string) {
    try {
        return (await axios.get(`${endpoint}/movies/${id}`)).data
    } catch (error) {
        console.error(error)
    }
}

async function updateMovie(id: string, updatedMovie: MovieDTO) {
    try {
        return (await axios.patch(`${endpoint}/movies/${id}`, updatedMovie)).data
    } catch (error) {
        console.error(error)
    }
}

async function deleteMovie(id: string) {
    try {
        return (await axios.delete(`${endpoint}/movies/${id}`)).data
    } catch (error) {
        console.error(error)
    }
}

async function getDirectors() {
    try {
        return (await axios.get(`${endpoint}/directors`)).data
    } catch (error) {
        console.error(error)
    }
}

async function getGenres() {
    try {
        return (await axios.get(`${endpoint}/genres`)).data
    } catch (error) {
        console.error(error)
    }
}

async function createReport(report: ReportRequestDTO){
    try {
        return (await axios.post(`${endpoint}/report`, report)).data
    } catch (error) {
        console.error(error)
    }
}

export default {
    createMovie,
    getMovies,
    getMovie,
    updateMovie,
    deleteMovie,
    getDirectors,
    getGenres,
    createReport
}