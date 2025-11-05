const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

 export async function fetchStudents() {
    const res = await fetch(`${API}/students`);
    if (!res.ok) {
        throw new Error("Failed to fetch students");
    }
    return res.json();
}

export async function createStudent(student) {
    const res = await fetch(`${API}/students`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
    }); 
    if (!res.ok) {
        throw new Error("Failed to create student");
    }   
    return res.json();
}
export async function updateStudent(studentId, student) {
    const res = await fetch(`${API}/students/${studentId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
    });
    if (!res.ok) {
        throw new Error("Failed to update student");
    }
    return res.json();
}
export async function deleteStudent(studentId) {
    const res = await fetch(`${API}/students/${studentId}`, {
        method: "DELETE",
    });
    if (!res.ok) {
        throw new Error("Failed to delete student");
    }
    return res.json();
};