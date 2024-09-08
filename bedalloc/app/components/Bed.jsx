"use client"
import React, { useState, useEffect, useRef } from 'react';

const Bed = ({ bed }) => {
  const [showDetails, setShowDetails] = useState(false);
  // const detailsRef = useRef(null);

  const bedStatus = bed.isAvailable ? 'bg-green-500' : 'bg-red-500';
 
  // const handleBedClick = () => {
  //   setShowDetails(true);
  // };

  // const handleClickOutside = (event) => {
  //   if (detailsRef.current && !detailsRef.current.contains(event.target)) {
  //     setShowDetails(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  return (
    <div
      className={`bed p-2 ${bedStatus} text-white rounded-lg hover:scale-110 transition-transform duration-200 hover:cursor-pointer`}
    >
      <img src="bed.png" alt="bed" />
      Bed {bed.id}

      {/* {showDetails && (
        <div
          className="absolute z-10 bg-white shadow-lg rounded-lg p-4 max-w-xs"
          ref={detailsRef}
        >
          <h3 className="text-lg font-semibold">Bed {bed.id}</h3>
          <p>Status: {bed.isAvailable ? 'Available' : 'Unavailable'}</p>
          <div className="flex justify-end mt-4 z-2">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded"
              onClick={() => setShowDetails(false)}
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Bed;