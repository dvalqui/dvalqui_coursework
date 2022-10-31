import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";
import CharacterList from "../components/CharacterList";


async function HarryPotterContainer(){
    const [Character, setCharacters] = useState([]);
    const [next, setNext] = useState([null]);
    const [previous, setPrevious] = useState([null]);


async function fetchCharacters(url = "https://hp-api.herokuapp.com/api/characters"){
    const response = await fetch(url);
    const json = await response.json();
    setCharacters(json.results);
    setNext(json.next);
    setPrevious(json.previous);
}

useEffect (() => {
    fetchCharacters ();
}, []);
    
    return (
        <>
        <Heading text="The Magical Harry Potter Website"/>
                <Button text="Previous" isDisabled={!previous} clickHandler={() => fetchCharacters(previous)}/>
                <Button text="Next" isDisabled={!next} clickHandler={() => fetchCharacters(next)}/>
     </>
        );

};











export default HarryPotterContainer;