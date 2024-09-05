import React from 'react';

const SlidingWindow = ({ bedNumber, isOpen, onClose }) => {
  return (
    <div 
      className={`fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <button onClick={onClose} className="text-red-500">Close</button>
        <h2 className="text-xl font-semibold">Bed {bedNumber} Details</h2>
        {/* Add more details about the bed here */}
      </div>
    </div>
  );
};

export default SlidingWindow;
