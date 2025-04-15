import { useEffect, useState } from "react";
import {
    getPopularMovies,
    getMoviesByGenre,
    searchMovies,
} from "../services/movieService";
import MovieList from "../components/MovieList";
import Search from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Header from "../components/Header";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        loadPopularMovies();
    }, []);

    const loadPopularMovies = async () => {
        const data = await getPopularMovies();
        setMovies(data);
    };

    const handleSearch = async (text) => {
        setQuery(text);
        if (text.trim() === "") {
            genre ? loadByGenre(genre) : loadPopularMovies();
            return;
        }

        const results = await searchMovies(text);
        setMovies(results);
    };

    const loadByGenre = async (genreId) => {
        setGenre(genreId);
        setQuery("");
        if (genreId === null) {
            loadPopularMovies();
            return;
        }

        const data = await getMoviesByGenre(genreId);
        setMovies(data);
    };

    return (
        <div>
            <Header onSearch={handleSearch} />
            <CategoryFilter onSelectGenre={loadByGenre} />
            <MovieList movies={movies} />
        </div>
    );
};

export default Home;
