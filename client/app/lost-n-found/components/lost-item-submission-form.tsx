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
      <div className="w-full max-w-xs bg-black">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
          onSubmit={submitForm}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow apperance-none border rounded w-full py-2 px-3"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
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
              className="shadow apperance-none border rounded w-full py-2 px-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={"description of the item"}
              required
              type={"text"}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
} 