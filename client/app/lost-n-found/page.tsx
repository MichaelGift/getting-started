import {fetchAllItems} from "@/app/lost-n-found/action";
import LostItemCard from "@/app/lost-n-found/components/lost-item-card";
import LostItemSubmissionForm from "@/app/lost-n-found/components/lost-item-submission-form";

export default async function LostNFoundPage() {
    const itemData = await fetchAllItems()


    return <div>
        <LostItemSubmissionForm/>
        <h1>Lost n found Page</h1>
        {itemData?.map((item) => <LostItemCard data={item} key={item.id}/>)}
    </div>
}