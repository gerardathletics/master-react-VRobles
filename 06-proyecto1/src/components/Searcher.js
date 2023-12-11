import React from 'react';

export const Searcher = () => {
    return (
        <div className="search">
            <h3 className="title">Seach movie</h3>
            <form>
                <input type="text" id="search_field" />
                <button id="search">Search</button>
            </form>
        </div>
    );
};
