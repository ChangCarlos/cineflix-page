import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movieService";
import MovieList from "../components/MovieList/index.jsx";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await getPopularMovies();
                setMovies(data);
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            }
        };

        load();
    }, []);

    return (
        <div>
            <MovieList movies={movies} />
        </div>
    );
};

export default Home;
