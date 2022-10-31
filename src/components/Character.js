import React from "react";

import Button from './Button';

function Character({character, onFavouriteButtonClick}) {
    return (
        <section>
            <h1>{character.name} {character.isFavourite && "⭐"}</h1>
            <ul>
                <li><strong>Species:</strong> {character.species}</li>
                <li><strong>Gender:</strong> {character.gender}</li>
                <li><strong>House:</strong> {character.house}</li>
                <li><strong>Birth Year:</strong> {character.birth_year}</li>
            </ul>
            <Button text="Add to Favourites" clickHandler={() => onFavouriteButtonClick(character)}/>
        </section>
    );
}

export default Character;