"use client"
import React from 'react';
import Bed from './Bed';
import { useDispatch } from 'react-redux';
import { toggle } from '../lib/features/infowindow/windowSlice';

const Room = ({ room }) => {
    const dispatch = useDispatch();

    const handleBedClick = (bedNumber) => {
        console.log("this is bed number", bedNumber);
        console.log("hello");
    };

    const handleRoomClick = () => {
        dispatch(toggle());
    };

    if (!room || !room.name || !Array.isArray(room.beds)) {
        return <div>Room data is incomplete</div>;
    }

    return (
        <div 
            className="room p-3   m-1 h-full w-full bg-white border rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 hover:cursor-pointer"
            onClick={handleRoomClick}
        >
            <h2 className="room-title text-xl font-semibold mb-4">
                {room.name}
            </h2>
            <div className="bed-list grid grid-cols-4 gap-2 overflow-auto ">
                {room.beds.map((bed) => (
                    <div key={bed.id} onClick={() => handleBedClick(bed.id)}>
                        <Bed bed={bed} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Room;
