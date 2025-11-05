import { useState } from "react";

export default function StudentForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", age: "", email: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.email) return;
    onSubmit({ ...form, age: Number(form.age) });
    setForm({ name: "", age: "", email: "" });
  };

  return (
    <div className="w-full flex justify-center items-center my-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-white border rounded-xl p-4 flex flex-row flex-wrap items-center justify-center gap-4"
      >
        <input
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 flex-1 min-w-[180px]"
          name="name"
          value={form.name}
          type="text"
          placeholder="Enter name"
          autoComplete="name"
        />

        <input
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 w-28 min-w-[100px]"
          name="age"
          value={form.age}
          type="number"
          placeholder="Age"
          min="18"
          max="40"
        />

        <input
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 flex-1 min-w-[220px]"
          name="email"
          value={form.email}
          type="text"
          placeholder="Enter email address"
          autoComplete="email"
        />

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
}
