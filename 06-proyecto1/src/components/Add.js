import { React, useState } from 'react';
import { SaveInStorage } from '../helpers/SaveInStorage';

export const Add = ({ setListState }) => {
    const compTitle = 'Add movie';
    const [movieState, setMovieState] = useState({
        title: '',
        description: '',
    });

    const { title, description } = movieState;

    const getFormValues = (e) => {
        e.preventDefault(); // prevents the default behavior of the form (refreshing the page)

        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        let movie = {
            id: new Date().getTime(),
            title,
            description,
        };

        setMovieState(movie);

        // update movie list state
        setListState((elements) => {
            return [...elements, movie];
        });

        // save in local storage (helper)
        SaveInStorage('movies', movie);
    };

    return (
        <div className="add">
            <h3 className="title">{compTitle}</h3>
            {title && description && 'You created the movie: ' + movieState.title}
            <form onSubmit={getFormValues}>
                <input type="text" id="title" placeholder="Title" />
                <textarea id="description" placeholder="Description"></textarea>
                <input type="submit" id="save" value="Save" />
            </form>
        </div>
    );
};
