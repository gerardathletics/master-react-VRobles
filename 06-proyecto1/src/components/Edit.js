import React from 'react';

export const Edit = ({ movie, getMovies, setEdit, setListState }) => {
    const component_title = 'Edit movie';
    const saveEdit = (e, id) => {
        e.preventDefault();

        let target = e.target;
        const stored_movies = getMovies();

        const index = stored_movies.findIndex((movie) => movie.id === id);
        let updated_movie = {
            id,
            title: target.title.value,
            description: target.description.value,
        };

        stored_movies[index] = updated_movie;

        localStorage.setItem('movies', JSON.stringify(stored_movies));

        setListState(stored_movies);
        setEdit(0);
    };

    return (
        <div className="edit_form">
            <h3 className="title">{component_title}</h3>
            <form onSubmit={(e) => saveEdit(e, movie.id)}>
                <input type="text" name="title" className="edited_title" defaultValue={movie.title} />
                <textarea name="description" className="edited_description" defaultValue={movie.description} />
                <input type="submit" value="Update" className="edit" />
            </form>
        </div>
    );
};
