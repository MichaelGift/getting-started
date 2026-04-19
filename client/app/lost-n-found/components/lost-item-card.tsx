'use client'

import {deleteItem} from "@/app/lost-n-found/action";
import {Item} from "@/app/data/lost-items";

export default function LostItemCard({ data }: { data: Item }) {
    return <>
        <i>{data.id}</i>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <i>{data.createdAt}</i>
        <hr/>
        <button onClick={() => deleteItem(data.id)}>
            Delete
        </button>
    </>
}