import StudentDataSubmissionForm from "./component/student-data-submisison-form";
import StudentDataCard from "./component/student-data-card";
import { fetchAllStudents } from "./action";

export default async function StudentDataPage() {
    const studentData = await fetchAllStudents();
    return (
      <div>
        <StudentDataSubmissionForm />

        <h1>Lost n found Page</h1>
        {studentData?.map((student) => (
          <StudentDataCard data={student} key={student.id} />
        ))}
      </div>
    );
}