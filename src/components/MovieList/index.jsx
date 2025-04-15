import Categories from "../CategoryFilter";
import MovieCard from "../MovieCard";
import { MovieListContainer, Movies, Title } from "./MovieList"; // seus styled components

const MovieList = ({ movies }) => {
  return (
    <MovieListContainer>
      <Categories />
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
