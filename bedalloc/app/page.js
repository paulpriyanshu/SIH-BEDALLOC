"use client"
import React from 'react';
import { useState } from 'react';
import RoomList from './components/RoomList';
import SlidingWindow from './components/SlidingWindow';
const rooms = [
  {
    id: 1,
    name: 'Room A',
    beds: [
      { id: 1, isAvailable: true }, { id: 2, isAvailable: false }, { id: 3, isAvailable: true }, { id: 4, isAvailable: true },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: false }, { id: 7, isAvailable: true }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: true }, { id: 10, isAvailable: false }, { id: 11, isAvailable: true }, { id: 12, isAvailable: true },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: false }, { id: 15, isAvailable: true }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: true }, { id: 18, isAvailable: false }, { id: 19, isAvailable: true }, { id: 20, isAvailable: true }
    ]
  },
  {
    id: 2,
    name: 'Room B',
    beds: [
      { id: 1, isAvailable: true }, { id: 2, isAvailable: true }, { id: 3, isAvailable: false }, { id: 4, isAvailable: true },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: true }, { id: 7, isAvailable: false }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: true }, { id: 10, isAvailable: true }, { id: 11, isAvailable: false }, { id: 12, isAvailable: true },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: true }, { id: 15, isAvailable: false }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: true }, { id: 18, isAvailable: true }, { id: 19, isAvailable: false }, { id: 20, isAvailable: true }
    ]
  },
  {
    id: 3,
    name: 'Room C',
    beds: [
      { id: 1, isAvailable: false }, { id: 2, isAvailable: true }, { id: 3, isAvailable: true }, { id: 4, isAvailable: false },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: true }, { id: 7, isAvailable: false }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: false }, { id: 10, isAvailable: true }, { id: 11, isAvailable: true }, { id: 12, isAvailable: false },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: true }, { id: 15, isAvailable: false }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: false }, { id: 18, isAvailable: true }, { id: 19, isAvailable: true }, { id: 20, isAvailable: false }
    ]
  },
  {
    id: 4,
    name: 'Room D',
    beds: [
      { id: 1, isAvailable: true }, { id: 2, isAvailable: true }, { id: 3, isAvailable: true }, { id: 4, isAvailable: true },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: true }, { id: 7, isAvailable: true }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: true }, { id: 10, isAvailable: true }, { id: 11, isAvailable: true }, { id: 12, isAvailable: true },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: true }, { id: 15, isAvailable: true }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: true }, { id: 18, isAvailable: true }, { id: 19, isAvailable: true }, { id: 20, isAvailable: true }
    ]
  },
  {
    id: 5,
    name: 'Room E',
    beds: [
      { id: 1, isAvailable: true }, { id: 2, isAvailable: false }, { id: 3, isAvailable: true }, { id: 4, isAvailable: true },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: false }, { id: 7, isAvailable: true }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: true }, { id: 10, isAvailable: false }, { id: 11, isAvailable: true }, { id: 12, isAvailable: true },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: false }, { id: 15, isAvailable: true }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: true }, { id: 18, isAvailable: false }, { id: 19, isAvailable: true }, { id: 20, isAvailable: true }
    ]
  },
  {
    id: 6,
    name: 'Room F',
    beds: [
      { id: 1, isAvailable: true }, { id: 2, isAvailable: false }, { id: 3, isAvailable: true }, { id: 4, isAvailable: true },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: false }, { id: 7, isAvailable: true }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: true }, { id: 10, isAvailable: false }, { id: 11, isAvailable: true }, { id: 12, isAvailable: true },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: false }, { id: 15, isAvailable: true }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: true }, { id: 18, isAvailable: false }, { id: 19, isAvailable: true }, { id: 20, isAvailable: true }
    ]
  },
  {
    id: 7,
    name: 'Room G',
    beds: [
      { id: 1, isAvailable: true }, { id: 2, isAvailable: true }, { id: 3, isAvailable: false }, { id: 4, isAvailable: true },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: true }, { id: 7, isAvailable: false }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: true }, { id: 10, isAvailable: true }, { id: 11, isAvailable: false }, { id: 12, isAvailable: true },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: true }, { id: 15, isAvailable: false }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: true }, { id: 18, isAvailable: true }, { id: 19, isAvailable: false }, { id: 20, isAvailable: true }
    ]
  },
  {
    id: 8,
    name: 'Room H',
    beds: [
      { id: 1, isAvailable: false }, { id: 2, isAvailable: true }, { id: 3, isAvailable: true }, { id: 4, isAvailable: false },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: true }, { id: 7, isAvailable: false }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: false }, { id: 10, isAvailable: true }, { id: 11, isAvailable: true }, { id: 12, isAvailable: false },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: true }, { id: 15, isAvailable: false }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: false }, { id: 18, isAvailable: true }, { id: 19, isAvailable: true }, { id: 20, isAvailable: false }
    ]
  },
  {
    id: 9,
    name: 'Room I',
    beds: [
      { id: 1, isAvailable: true }, { id: 2, isAvailable: true }, { id: 3, isAvailable: true }, { id: 4, isAvailable: true },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: true }, { id: 7, isAvailable: true }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: true }, { id: 10, isAvailable: true }, { id: 11, isAvailable: true }, { id: 12, isAvailable: true },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: true }, { id: 15, isAvailable: true }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: true }, { id: 18, isAvailable: true }, { id: 19, isAvailable: true }, { id: 20, isAvailable: true }
    ]
  },
  {
    id: 10,
    name: 'Room J',
    beds: [
      { id: 1, isAvailable: true }, { id: 2, isAvailable: false }, { id: 3, isAvailable: true }, { id: 4, isAvailable: true },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: false }, { id: 7, isAvailable: true }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: true }, { id: 10, isAvailable: false }, { id: 11, isAvailable: true }, { id: 12, isAvailable: true },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: false }, { id: 15, isAvailable: true }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: true }, { id: 18, isAvailable: false }, { id: 19, isAvailable: true }, { id: 20, isAvailable: true }
    ]
  },
  {
    id: 11,
    name: 'Room K',
    beds: [
      { id: 1, isAvailable: true }, { id: 2, isAvailable: true }, { id: 3, isAvailable: false }, { id: 4, isAvailable: true },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: true }, { id: 7, isAvailable: false }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: true }, { id: 10, isAvailable: true }, { id: 11, isAvailable: false }, { id: 12, isAvailable: true },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: true }, { id: 15, isAvailable: false }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: true }, { id: 18, isAvailable: true }, { id: 19, isAvailable: false }, { id: 20, isAvailable: true }
    ]
  },
  {
    id: 12,
    name: 'Room L',
    beds: [
      { id: 1, isAvailable: false }, { id: 2, isAvailable: true }, { id: 3, isAvailable: true }, { id: 4, isAvailable: false },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: true }, { id: 7, isAvailable: false }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: false }, { id: 10, isAvailable: true }, { id: 11, isAvailable: true }, { id: 12, isAvailable: false },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: true }, { id: 15, isAvailable: false }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: false }, { id: 18, isAvailable: true }, { id: 19, isAvailable: true }, { id: 20, isAvailable: false }
    ]
  },
  {
    id: 13,
    name: 'Room M',
    beds: [
      { id: 1, isAvailable: true }, { id: 2, isAvailable: true }, { id: 3, isAvailable: true }, { id: 4, isAvailable: true },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: true }, { id: 7, isAvailable: true }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: true }, { id: 10, isAvailable: true }, { id: 11, isAvailable: true }, { id: 12, isAvailable: true },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: true }, { id: 15, isAvailable: true }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: true }, { id: 18, isAvailable: true }, { id: 19, isAvailable: true }, { id: 20, isAvailable: true }
    ]
  },
  {
    id: 14,
    name: 'Room N',
    beds: [
      { id: 1, isAvailable: true }, { id: 2, isAvailable: false }, { id: 3, isAvailable: true }, { id: 4, isAvailable: true },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: false }, { id: 7, isAvailable: true }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: true }, { id: 10, isAvailable: false }, { id: 11, isAvailable: true }, { id: 12, isAvailable: true },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: false }, { id: 15, isAvailable: true }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: true }, { id: 18, isAvailable: false }, { id: 19, isAvailable: true }, { id: 20, isAvailable: true }
    ]
  },
  {
    id: 15,
    name: 'Room O',
    beds: [
      { id: 1, isAvailable: true }, { id: 2, isAvailable: true }, { id: 3, isAvailable: false }, { id: 4, isAvailable: true },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: true }, { id: 7, isAvailable: false }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: true }, { id: 10, isAvailable: true }, { id: 11, isAvailable: false }, { id: 12, isAvailable: true },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: true }, { id: 15, isAvailable: false }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: true }, { id: 18, isAvailable: true }, { id: 19, isAvailable: false }, { id: 20, isAvailable: true }
    ]
  },
  {
    id: 16,
    name: 'Room P',
    beds: [
      { id: 1, isAvailable: false }, { id: 2, isAvailable: true }, { id: 3, isAvailable: true }, { id: 4, isAvailable: false },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: true }, { id: 7, isAvailable: false }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: false }, { id: 10, isAvailable: true }, { id: 11, isAvailable: true }, { id: 12, isAvailable: false },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: true }, { id: 15, isAvailable: false }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: false }, { id: 18, isAvailable: true }, { id: 19, isAvailable: true }, { id: 20, isAvailable: false }
    ]
  },
  {
    id: 17,
    name: 'Room Q',
    beds: [
      { id: 1, isAvailable: true }, { id: 2, isAvailable: true }, { id: 3, isAvailable: true }, { id: 4, isAvailable: true },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: true }, { id: 7, isAvailable: true }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: true }, { id: 10, isAvailable: true }, { id: 11, isAvailable: true }, { id: 12, isAvailable: true },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: true }, { id: 15, isAvailable: true }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: true }, { id: 18, isAvailable: true }, { id: 19, isAvailable: true }, { id: 20, isAvailable: true }
    ]
  },
  {
    id: 18,
    name: 'Room R',
    beds: [
      { id: 1, isAvailable: true }, { id: 2, isAvailable: false }, { id: 3, isAvailable: true }, { id: 4, isAvailable: true },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: false }, { id: 7, isAvailable: true }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: true }, { id: 10, isAvailable: false }, { id: 11, isAvailable: true }, { id: 12, isAvailable: true },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: false }, { id: 15, isAvailable: true }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: true }, { id: 18, isAvailable: false }, { id: 19, isAvailable: true }, { id: 20, isAvailable: true }
    ]
  },
  {
    id: 19,
    name: 'Room S',
    beds: [
      { id: 1, isAvailable: true }, { id: 2, isAvailable: true }, { id: 3, isAvailable: false }, { id: 4, isAvailable: true },
      { id: 5, isAvailable: true }, { id: 6, isAvailable: true }, { id: 7, isAvailable: false }, { id: 8, isAvailable: true },
      { id: 9, isAvailable: true }, { id: 10, isAvailable: true }, { id: 11, isAvailable: false }, { id: 12, isAvailable: true },
      { id: 13, isAvailable: true }, { id: 14, isAvailable: true }, { id: 15, isAvailable: false }, { id: 16, isAvailable: true },
      { id: 17, isAvailable: true }, { id: 18, isAvailable: true }, { id: 19, isAvailable: false }, { id: 20, isAvailable: true }
    ]
  },
  // 25 more rooms omitted for brevity
]
export default function BedAllocationPage() {
  const [selectedBed, setSelectedBed] = useState(null);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
   // const handleBedClick = () => {
  //   setShowDetails(true);
  // };

  // const handleClickOutside = (event) => {
  //   if (detailsRef.current && !detailsRef.current.contains(event.target)) {
  //     setShowDetails(false);
  //   }
  // };


  const handleBedClick = (bedNumber) => {
    setSelectedBed(bedNumber);
    setIsWindowOpen(true);
  };

  const closeWindow = () => {
    setIsWindowOpen(false);
  };
    // if (!room || !room.name || !Array.isArray(room.beds)) {
    //   return <div>Room data is incomplete</div>;
    // }
  return (
    <div className="bed-allocation-page p-6 ">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">Allocate Beds</h1>
      <RoomList rooms={rooms} />
      <SlidingWindow bedNumber={selectedBed} isOpen={isWindowOpen} onClose={closeWindow} />
    </div>
  );
}
