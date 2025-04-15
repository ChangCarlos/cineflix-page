import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'
import MovieList from './components/MovieList'
import { getMoviesByGenre, getPopularMovies, searchMovies } from './components/services/movieService';
import Categories from './components/CategoryFilter';

const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchPopular = async () => {
    try {
      const data = await getPopularMovies();
      setMovies(data);
    } catch (err) {
      console.error("Erro ao carregar populares", err);
    }
  };

  const handleSearch = async (query) => {
    if (query.trim() === "") {
      fetchPopular();
      return;
    }

    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (err) {
      console.error("Erro na busca:", err);
    }
  };

  const handleGenreSelect = async (genreId) => {
    if (!genreId) {
      fetchPopular();
      return;
    }
  
    try {
      const data = await getMoviesByGenre(genreId);
      setMovies(data);
    } catch (err) {
      console.error("Erro ao filtrar por gênero:", err);
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <>
      <Header onSearch={handleSearch} />
      <Categories onSelectGenre={handleGenreSelect} />
      <MovieList movies={movies} />
    </>
  );
};

export default App;
