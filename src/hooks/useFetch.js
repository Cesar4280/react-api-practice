import { useState, useEffect } from "react";

import Swal from "sweetalert2";

export const useFetch = characterName => {

    const [loader, setLoader] = useState(false);
    const [characters, setCharacters] = useState([]);

    useEffect(() => { getCharacters(characterName) }, [characterName]);

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

    return [characters, loader];
}
