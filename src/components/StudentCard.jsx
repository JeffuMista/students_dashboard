// import { useState } from "react";
export default function StudentCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border border-gray-300">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Jeffu Mista</div>
        <p className="text-gray-800 text-base flex flex-col gap-2">
          Age: 35
          <span> Email: jeffumista@gmail.com </span>{" "}
          <span>Batch: JULY 2025 </span>
        </p>
      </div>
    </div>
  );
}
