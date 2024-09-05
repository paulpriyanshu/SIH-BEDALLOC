"use client"
import React from 'react';
import Bed from './Bed';
import { useState } from 'react';
import SlidingWindow from './SlidingWindow';
const Room = ({ room }) => {
//     const [selectedBed, setSelectedBed] = useState(null);
//   const [isWindowOpen, setIsWindowOpen] = useState(false);

  const handleBedClick = (bedNumber) => {
    setSelectedBed(bedNumber);
    setIsWindowOpen(true);
  };

//   const closeWindow = () => {
//     setIsWindowOpen(false);
//   };
    if (!room || !room.name || !Array.isArray(room.beds)) {
      return <div>Room data is incomplete</div>;
    }
  
    return (
      <div className="room p-4 m-2 border rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 hover:cursor-pointer">
        <h2 className="room-title text-xl font-semibold mb-4">{room.name}</h2>
        <div className="bed-list grid grid-cols-5 gap-2">
          {room.beds.map((bed) => (
            <Bed key={bed.id} bed={bed} onClick={handleBedClick}/>
          ))}
        </div>
       
      </div>
    );
  };

export default Room;
