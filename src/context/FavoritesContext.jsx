import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

const FAVORITES_KEY = "cineflix_favorites";

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem(FAVORITES_KEY);
        if (stored) {
            setFavorites(JSON.parse(stored));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (movie) => {
        const isFavorited = favorites.some((fav) => fav.id === movie.id);
        if (isFavorited) {
            setFavorites((prev) => prev.filter((fav) => fav.id !== movie.id));
        } else {
            setFavorites((prev) => [...prev, movie]);
        }
    };

    const isFavorite = (id) => {
        return favorites.some((fav) => fav.id === id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext);
