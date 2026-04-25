import { fetchItemsById } from "../action";
import LostItemEditForm from "../components/lost-item-editform";

export default async function LostNFoundItem({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetchItemsById(id);
  console.log(" what here ", data);

  if (!data) {
    return <div>Item not found</div>;
  }



  return (
    <>
      This is a lost item with id {id}
      <LostItemEditForm id={id} data={data}/>
    </>
  );
}
