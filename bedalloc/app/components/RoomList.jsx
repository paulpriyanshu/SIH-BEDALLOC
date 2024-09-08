import React from 'react';
import Room from './Room';
import { RoomGraph } from './RoomGraph';

const RoomList = ({ rooms, name }) => {
  // Filter rooms based on the provided name prop, ignoring the last number
  const filteredRooms = name
    ? rooms.filter((room) => {
        const roomNameWithoutNumber = room.name.replace(/\s\d+$/, '');
        return roomNameWithoutNumber === name;
      })
    : rooms;

  console.log(filteredRooms);

  return (
    <div>

        <div className="grid grid-cols-4 gap-4 p-10">
      
      { rooms && filteredRooms.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </div>

    </div>
   
  );
};

export default RoomList;