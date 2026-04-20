'use client'

import {deleteItem} from "@/app/lost-n-found/action";
import {Item} from "@/app/data/lost-items";
import {useRouter} from "next/navigation";

export default function LostItemCard({ data }: { data: Item }) {
    const router = useRouter()
    return <div className="shadow-sm">
        {/*<i>{data.id}</i>*/}
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <p>{data.color}</p>
        {/*<i>{data.createdAt}</i>*/}
        <hr/>
        <button onClick={() => deleteItem(data.id)}>
            Delete
        </button>
        <button onClick={() => router.push(`lost-n-found/${data.id}`) }>Edit</button>
    </div>
}