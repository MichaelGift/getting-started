'use server'

import { Item } from "../data/lost-items";


export async function fetchAllItems(): Promise<Item[] | undefined> {
    try {
        const response = await fetch('http://localhost:3000/lostnfound', {
            method: 'GET'
        });

        if (!response.ok) return [];

        return response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function deleteItem(id: string): Promise<{ message: string } | undefined> {
    try {
        const response = await fetch(`http://localhost:3000/lostnfound/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) return {message: `Item with id ${id} was not found.`};

        return response.json();
    } catch (e) {
        console.error(e);
    }
}

export async function createMissingItem(data: { name: string; description: string; color: string; }) {
    console.log(data);

    try {
        const response = await fetch('http://localhost:3000/lostnfound', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        if(!response.ok) return {} as Item

        return response.json();
    } catch (e){
        console.error(e);
    }
}