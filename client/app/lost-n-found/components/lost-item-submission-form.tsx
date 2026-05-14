'use client'

import {useState} from "react";

export default function LostItemSubmissionForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("");

    const submitForm = async () => {
        try {
            const response = await fetch('http://localhost:3001/lostnfound', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, description, color}),
            })
            if (!response.ok) {
                console.log(response)
                alert("Something went wrong");
                return;
            }

            alert("Lost item")
            console.log(response.json());
            setName("");
            setDescription("");
            setColor("");
        } catch (e) {
            console.error(e);
        }
    }

    
    return (
        <div className="w-full max-w-xs bg-black">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
                onSubmit={(e) => {
                    // e.preventDefault();
                    submitForm()
                }}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        name={"item"}
                        className="shadow apperance-none border rounded w-full py-2 px-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={"Name of the item"}
                        required
                        type={"text"}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Color
                    </label>
                    <input
                        name={"color"}
                        className="shadow apperance-none border rounded w-full py-2 px-3"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder={"color of the item"}
                        required
                        type={"text"}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Description
                    </label>
                    <input
                        name={"description"}
                        className="shadow apperance-none border rounded w-full py-2 px-3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder={"description of the item"}
                        required
                        type={"text"}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                         id={'form-submit-button'}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
                            type="submit">Submit
                    </button>
                </div>
            </form>
        </div>
    );
} 