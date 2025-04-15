import { useState } from "react";
import { SearchInput } from "./SearchBar";

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <SearchInput
            type="text"
            placeholder="Buscar Filme"
            value={query}
            onChange={handleChange}
        />
    );
};

export default Search;
