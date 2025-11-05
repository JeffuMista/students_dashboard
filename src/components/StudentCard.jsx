import { useState } from "react";

export default function StudentCard({ student, onEdit, onDelete }) {
  const [edit, setEdit] = useState(false);
  const [draft, setDraft] = useState(student);

  const handleSave = () => {
    onEdit(draft);
    setEdit(false);
  };

  return (
    <div className="rounded-xl shadow-sm border border-gray-300 bg-white m-2 p-2">
      {!edit ? (
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">{student.name}</h3>
            <p className="text-slate-600 text-sm">{student.email}</p>
            <p className="text-slate-600 text-sm">
              Age: {student.age}
            </p>
            <p className="text-slate-600 text-sm">Batch: JULY 2025</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setEdit(true)}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-4"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(student._id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-4"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className="px-6 py-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={draft.name}
              onChange={(e) => setDraft({ ...draft, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Age
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={draft.age}
              onChange={(e) =>
                setDraft({ ...draft, age: Number(e.target.value) })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={draft.email}
              onChange={(e) => setDraft({ ...draft, email: e.target.value })}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Save
            </button>
            <button
              onClick={() => setEdit(false)}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
