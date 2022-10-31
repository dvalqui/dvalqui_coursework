import React from "react";
import Character from "./Character";

function CharacterList({characters}) {
    if (characters.length === 0) {
        return(
            <p>Loading...</p>
        )
    }


const characterComponents = characters.map(character => (
    <Character
        key={character.url}
        character={character}
    />
));

return (
    <>
        {characterComponents}
    </>
);

}
export default CharacterList; 