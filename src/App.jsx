import { useState, Fragment } from "react";

import Form from "./components/Form";
import Cards from "./components/Cards";
import Banner from "./components/Banner";

export default function App() {

    const [nombre, setNombre] = useState("");

    return (
        <Fragment>
            <div className="container-fluid bg-dark">
                <Banner title="App Rick and Morty" />
            </div>
            <div className="container mt-5">
                <Form setCharacterName={setNombre} />
                <Cards characterName={nombre} />
            </div>
        </Fragment>
    );
}
