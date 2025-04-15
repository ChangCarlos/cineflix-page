import axios from "axios";

const API_KEY = 'ce00868d8a4d71f31d98af090585b832';
const BASE_URL = 'https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`);
    return res.data.results;
};

export const searchMovies = async (query) => {
    const res = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
            api_key: API_KEY,
            language: 'pt-BR',
            query,
        },
    });
    return res.data.results;
};

export const getMovieDetails = async (id) => {
    const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
    return res.data;
};

export const getGenres = async () => {
    const res = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`);
    return res.data.genres;
};

export const getMoviesByGenre = async (genreId) => {
    const res = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${genreId}`);
    return res.data.results;
};

export const getMovieTrailer = async (id) => {
    const res = await axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`);
    return res.data.results;
};