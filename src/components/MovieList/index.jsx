import MovieCard from "../MovieCard";
import { MovieListContainer, Movies, Title } from "./MovieList";

const MovieList = ({ movies }) => {
    return (
        <MovieListContainer>
            <Title>Lista de Filmes</Title>
            <Movies>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </Movies>
        </MovieListContainer>
    );
};

export default MovieList;

