import { useForm } from "../hooks/useForm";

import Swal from "sweetalert2";

import SearchBar from "./SearchBar";

export default function Form({ setCharacterName }) {

    const [inputs, handleChange, reset] = useForm({ nombre: "" });

    const { nombre } = inputs;

    const normalizeText = text => text
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const handleSubmit = event => {
        event.preventDefault();
        const characterName = normalizeText(nombre);
        console.log(characterName);
        if (!characterName) return Swal.fire({
            icon: "error",
            title: "Error",
            text: "Escriba algo"
        });
        setCharacterName(characterName);
        reset();
    }

    return (
        <form onSubmit={handleSubmit} className="mb-5">
            <SearchBar value={nombre} onChange={handleChange} />
        </form>
    );
}
