import { FavoritesContainer, Description, Title } from "./MovieDetailsStyle"
import MovieList from "../components/MovieList";
import { useFavorites } from "../context/FavoritesContext";
import Header from "../components/Header";


const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <>
        <Header />
        <FavoritesContainer>
            <Title>Filmes Favoritos</Title>
            {favorites.length > 0 ? (
                <MovieList movies={favorites} />
            ) : (
                <Description>Nenhum filme favoritado ainda.</Description>
            )}
        </FavoritesContainer>
        </>
    )
}

export default Favorites;