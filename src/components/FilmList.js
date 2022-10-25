import React from "react";
import Films from "./films";

function FilmList({films}){
    const filmNodes = films.map((film) =>{
        return (
            <film name={film.name}key={film.id}></film>

        )
    } )

    return
    <>
    {filmNodes}
    </>

}
export default FilmList; 