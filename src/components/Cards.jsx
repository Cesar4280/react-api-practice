import { useFetch } from "../hooks/useFetch";

import Card from "./Card";
import Spinner from "./Spinner";

export default function Cards({ characterName }) {

    const [characters, loader] = useFetch(characterName);

    return (
        loader ? 
        <Spinner /> : 
        <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            {characters.map(character => <Card key={character.id} character={character} />)}
        </div>
    );
}
