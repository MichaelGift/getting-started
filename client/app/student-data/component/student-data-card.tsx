'use client'
import { Student } from "@/app/data/student-data"
import { deleteStudent } from "../action";
import { useRouter } from "next/navigation";

export default function StudentDataCard({ data }: { data: Student }) {
    const router = useRouter()
    return (
      <div className="shadow-sm">
        <h1>{data.name}</h1>
        <p>{data.email}</p>

        <hr />
        <button onClick={() => deleteStudent(data.id)}>Delete</button>
        <button onClick={() => router.push(`student-data/${data.id}`)}>
          Edit
        </button>
      </div>
    );
}