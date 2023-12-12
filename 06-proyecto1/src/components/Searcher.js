import React, { useState } from 'react';

export const Searcher = ({ listState, setListState }) => {
    const [search, setSearch] = useState('');
    const [notFound, setNotFound] = useState(false);

    const searchMovie = (e) => {
        setSearch(e.target.value);

        let found_movies = listState.filter((movie) => {
            return movie.title.toLowerCase().includes(search.toLowerCase());
        });

        if (search.length <= 1 || found_movies <= 0) {
            found_movies = JSON.parse(localStorage.getItem('movies'));
            setNotFound(true);
        } else {
            setNotFound(false);
        }

        setListState(found_movies);
    };

    return (
        <div className="search">
            <h3 className="title">Seach movie: {search}</h3>
            {notFound && search.length > 1 && <p className="not-found">Movie not found</p>}
            <form>
                <input type="text" id="search_field" name="search" autoComplete="off" value={search} onChange={searchMovie} />
                <button id="search">Search</button>
            </form>
        </div>
    );
};
