export async function fetchAllCalculations(): Promise<Student[] | undefined> {
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