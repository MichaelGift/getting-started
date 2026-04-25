'use server'

import { Student } from "../data/student-data";


export async function fetchAllStudents(): Promise<Student[] | undefined> {
    try {
        const response = await fetch('http://localhost:3001/studentdata', {
            method: 'GET'
        });

        if (!response.ok) return [];

        return response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function fetchStudentById(id: string ): Promise<Student | undefined> {
  try {
    const response = await fetch(`http://localhost:3001/studentdata/${id}`, {
      method: "GET",
    });

    if (!response.ok) return;

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function editStudent(id: string,  data: { name : string, email:string}): Promise<Student | undefined> {
  try {
    const response = await fetch(`http://localhost:3001/studentdata/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) return ;

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function deleteStudent(id: string): Promise<{ message: string } | undefined> {
    try {
        const response = await fetch(`http://localhost:3001/studentdata/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) return {message: `Student with id ${id} was not found.`};

        return response.json();
    } catch (e) {
        console.error(e);
    }
}

export async function createMissingStudent(data: { name: string; email: string; }) {
    console.log(data);

    try {
        const response = await fetch('http://localhost:3001/studentdata', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        if(!response.ok) return {} as Student

        return response.json();
    } catch (e){
        console.error(e);
    }
}