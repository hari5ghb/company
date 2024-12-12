import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai'; // Import checkmark icon from react-icons

function WorkerDashboard() {
  const [completedCount, setCompletedCount] = useState(0);
  const [submittedIndexes, setSubmittedIndexes] = useState(Array(10).fill(false)); // Track submitted buttons

  const handleSubmit = (index) => {
    if (!submittedIndexes[index]) {
      setCompletedCount(completedCount + 1); // Add one green box
    } else {
      setCompletedCount(completedCount - 1); // Remove one green box if clicked again
    }

    // Update the button submission state
    const updatedIndexes = [...submittedIndexes];
    updatedIndexes[index] = !updatedIndexes[index];
    setSubmittedIndexes(updatedIndexes);
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-5">Work Completion Tracker</h1>

      {/* Work Rows */}
      <div className="grid gap-4 mb-10">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="grid grid-cols-4 gap-5 items-center border-b pb-2">
            <input
              type="email"
              placeholder="Email"
              className="p-2 border-b-2 border-white focus:border-blue-500 outline-none"
              disabled={submittedIndexes[index]} // Disable if the row is submitted
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-2 border-b-2 border-white focus:border-blue-500 outline-none"
              disabled={submittedIndexes[index]} // Disable if the row is submitted
            />
            <input
              type="text"
              placeholder="Website Name"
              className="p-2 border-b-2 border-white focus:border-blue-500 outline-none"
              disabled={submittedIndexes[index]} // Disable if the row is submitted
            />
            <div className="flex justify-center items-center">
              <button
                onClick={() => handleSubmit(index)} // Pass the index to handle click
                className={`bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 ${
                  submittedIndexes[index] ? 'hidden' : ''
                }`}
              >
                Submit
              </button>
              {/* Green tick after submission */}
              {submittedIndexes[index] && (
                <AiOutlineCheck className="text-green-500 text-2xl" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Completion Rectangle */}
      <div className="relative w-80 h-16 border-2 border-gray-400 rounded-lg flex items-center p-2">
        {[...Array(completedCount)].map((_, index) => (
          <div
            key={index}
            className="h-full bg-green-500 mr-1"
            style={{ width: `${100 / 10}%` }} // Each box is 10% of the rectangle width
          ></div>
        ))}
      </div>

      {/* Counter Text */}
      <div className="mt-3 text-lg font-semibold">
        Completed: {completedCount}/10
      </div>
    </div>
  );
}

export default WorkerDashboard;
