import { fetchStudentById } from "../action";
import StudentDataEditForm from "../component/student-data-editform";

export default async function StudentData({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await fetchStudentById(slug);
  console.log(" what here ", data);

  if (!data) {
    return <div>Item not found</div>;
  }



  return (
    <>
      This is a lost item with id {slug}
      <StudentDataEditForm id={slug} data={data} />
    </>
  );
}
