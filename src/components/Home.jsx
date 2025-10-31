import { useState, useEffect } from "react";
import StudentCard from "./StudentCard.jsx";
import StudentForm from "./StudentForm.jsx";
import {
  fetchStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../lib/api.js";
export default function Home() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await fetchStudents();
        setStudents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function handleAddStudent(student) {
    const newStudent = await createStudent(student);
    setStudents([...students, newStudent]);
  }
  async function handleEditStudent(student) {
    const updatedStudent = await updateStudent(student._id, student);
    setStudents(
      students.map((s) => (s._id === student._id ? updatedStudent : s))
    );
  }
  async function handleDeleteStudent(studentId) {
    await deleteStudent(studentId);
    setStudents(students.filter((s) => s._id !== studentId));
  }
  return (
    <>
      <StudentForm onSubmit={handleAddStudent} />
      {loading && <p>Loading students...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      <studentCard
        students={students}
        onEdit={handleEditStudent}
        onDelete={handleDeleteStudent}
      />
    </>
  );
}
