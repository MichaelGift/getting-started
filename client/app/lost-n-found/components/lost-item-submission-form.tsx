'use client'

import {useState} from "react";
import {Item} from "@/app/data/lost-items";

export default function LostItemSubmissionForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("");

    const submitForm = async (e: SubmitEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/lostnfound', {
                method: 'POST',
                body: JSON.stringify({name: '1', description: '2', color: "3"}),
            })
            if (!response.ok) return {} as Item

            return response.json();
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <form onSubmit={submitForm}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={"Name of the item"}

                required
                type={"text"}
            />
            <input
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder={"color of the item"}
                required
                type={"text"}
            />
            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={"description of the item"}
                required
                type={"text"}
            />
            <button type="submit">
                Submit
            </button>

        </form>
    )
}