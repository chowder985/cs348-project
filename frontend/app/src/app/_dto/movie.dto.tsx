export type MovieDTO = {
    title: string;
    director: string;
    release_date: string;
    genres: string[];
    rating: number;
}

export type ReportRequestDTO = {
    director: string;
    genre: string[];
    releaseSDate: string;
    releaseEDate: string;
    minRating: number;
    maxRating: number;
}

export type ResponseMovieDTO = MovieDTO & {
    id: number;
}