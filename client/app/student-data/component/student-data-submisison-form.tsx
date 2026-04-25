'use client'

import {useState} from "react";

export default function StudentDataSubmissionForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const submitForm = async () => {
        try {
            const response = await fetch('http://localhost:3001/studentdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, email}),
            })
            if (!response.ok) {
                console.log(response)
                alert("Something went wrong");
                return;
            }

            alert("Student data")
            console.log(response.json());
            setName("");
            setEmail("");
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
                        className="shadow apperance-none border rounded w-full py-2 px-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={"Name of the Student"}
                        required
                        type={"text"}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        className="shadow apperance-none border rounded w-full py-2 px-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={"email of the student"}
                        required
                        type={"text"}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
                            type="submit">Submit
                    </button>
                </div>
            </form>
        </div>
    );
} 