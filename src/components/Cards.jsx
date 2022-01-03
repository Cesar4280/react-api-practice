import { useState, useEffect } from "react";

import Swal from "sweetalert2";

import Card from "./Card";
import Spinner from "./Spinner";

export default function Cards({ characterName }) {

    const [loader, setLoader] = useState(false);
    const [characters, setCharacters] = useState([]);

    useEffect(() => getCharacters(characterName), [characterName]);

    const getCharacters = async name => {
        setLoader(true);
        try {
            const URL = `https://rickandmortyapi.com/api/character/?name=${name}&status=alive`;
            const config = {
                headers: {
                    method: "GET",
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            };
            const response = await fetch(URL, config);
            if (!response.ok) return Swal.fire({
                icon: "error",
                title: "Error",
                text: `No existe ${name}`
            });
            const data = await response.json();
            console.log(data.results);
            setCharacters(data.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoader(false);
            console.log(`"${characterName}"`);
        }
    }

    return (
        loader ? 
        <Spinner /> : 
        <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            {characters.map(character => <Card key={character.id} character={character} />)}
        </div>
    );
}
