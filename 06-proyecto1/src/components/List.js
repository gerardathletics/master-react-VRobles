import React, { useEffect, useState } from 'react';
import { Edit } from './Edit';

export const List = ({ listState, setListState }) => {
    const [edit, setEdit] = useState(0);

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem('movies')) || [];
        setListState(movies);

        return movies;
    };

    useEffect(() => {
        getMovies();
    }, []);

    const deleteMovie = (id) => {
        // get movies and filter the one that matches the id
        let saved_movies = getMovies();
        let filtered_movies = saved_movies.filter((movie) => movie.id !== parseInt(id));

        // update state and localstorage
        setListState(filtered_movies);
        localStorage.setItem('movies', JSON.stringify(filtered_movies));
    };

    return (
        <>
            {listState != null ? (
                listState.map((movie) => {
                    return (
                        <article className="peli-item">
                            <h3 className="title">{movie.title}</h3>
                            <p className="description">{movie.description}</p>

                            <button className="edit" onClick={() => setEdit(movie.id)}>
                                Edit
                            </button>
                            <button className="delete" onClick={() => deleteMovie(movie.id)}>
                                Delete
                            </button>

                            {/* Edit form*/}
                            {edit === movie.id && <Edit movie={movie} getMovies={getMovies} setEdit={setEdit} setListState={setListState} />}
                        </article>
                    );
                })
            ) : (
                <h3>No movies</h3>
            )}
        </>
    );
};
