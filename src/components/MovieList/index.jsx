import { useEffect, useState } from "react";
import Categories from "../CategoryFilter";
import MovieCard from "../MovieCard";
import { MovieListContainer, Movies, Title } from "./MovieList"
import { getPopularMovies, searchMovies } from "../services/movieService";


const MovieList = ({ movies }) => {
    return (
      <MovieListContainer>
        <Categories />
        <Title>Lista de filmes</Title>
        <Movies>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Movies>
      </MovieListContainer>
    );
  };
  
  export default MovieList;