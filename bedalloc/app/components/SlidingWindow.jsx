import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../lib/features/infowindow/windowSlice';
import { rooms } from '../api/actions/beds';

export const SlidingWindow = ({ isOpen }) => {
    
  const bedNumber = useSelector((state) => state.bedNumber);
  const dispatch = useDispatch();

  // Check if a room is full
  const checkRoomFull = (room) => {
    const totalBeds = room.beds.length;
    const availableBeds = room.beds.filter(bed => bed.isAvailable).length;
    return availableBeds === 0;
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-1/3 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-solid border-white border-opacity-20 shadow-lg z-50 transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4">
        <button
          className="text-red-500"
          onClick={() => dispatch(toggle())}
        >
          Close
        </button>
        <div>Hello</div>
        <h2 className="text-xl font-semibold">Bed {bedNumber} Details</h2>
        <div>
          {rooms.map((room) => {
            const isFull = checkRoomFull(room);
            return (
              <div
                key={room.id}
                className={`text-black p-2 my-2 rounded-xl ${
                  isFull ? 'bg-red-500' : 'bg-green-400'
                }`}
              >
                <span className="font-bold">{room.name}</span>
                <span className="text-sm ml-2">
                  ({room.beds.filter(bed => bed.isAvailable).length} out of {room.beds.length} beds available)
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};