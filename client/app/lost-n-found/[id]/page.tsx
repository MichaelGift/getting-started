export default async function LostNFoundItem({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params
    return <>
        This is a lost item with id {id}
    </>
}