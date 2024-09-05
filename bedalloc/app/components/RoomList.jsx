import React from 'react';
import Room from './Room';

const RoomList = ({ rooms }) => {
  console.log(rooms)
  return (
    <div className="room-list grid grid-cols-5 gap-4 p-4">
      {rooms.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </div>
  );
};

export default RoomList;
