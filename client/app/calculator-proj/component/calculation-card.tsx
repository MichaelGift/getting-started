'use client';
import { Calculation } from "@/app/data/calcu-proj";
import { useRouter } from "next/navigation";

export default function CalculationCard({ data }: { data: Calculation }) {
  const router = useRouter();
  return (
    <div className="shadow-sm">
      <p>{data.numOne}</p>
      <p>{data.numTwo}</p>
    </div>
  );
}