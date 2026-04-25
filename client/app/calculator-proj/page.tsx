import CalculationCard from "./component/calculation-card";
import CalculationInputsSubmission from "./component/calculation-input-submission";

export default async function CalculationDataPage() {
    // const studentData = await fetchAllStudents();
    return (
      <div>
        <CalculationInputsSubmission />

        <h1>Lost n found Page</h1>
        {/* {studentData?.map((Calculation) => (
          <CalculationCard data={student} key={student.id} />
        ))} */}
      </div>
    );
}