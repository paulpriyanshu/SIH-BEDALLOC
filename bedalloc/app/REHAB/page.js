"use client"
import React, { useState } from 'react';
import RoomList from '../components/RoomList';
import { SlidingWindow } from '../components/SlidingWindow';

import { useSelector } from 'react-redux';
// import { rooms } from '../api/actions/beds';
import { specialTreatmentRooms } from '../api/actions/specialbeds';
import RoomBar from '../components/RoomBar';
import Menu from '../components/Menu';

export default function page() {
  // const [selectedBed, setSelectedBed] = useState(null);
  const isWindowOpen = useSelector(state => state.value); // Renamed to avoid conflicts
  const bedNumber = useSelector(state => state.bedNumber); // Ensure this is correctly set in your Redux state
  // const [isOpen,setIsOpen]=useState()
  // const isOpen=useSelector(state=>state.isOpen)
  const isOpen = useSelector((state) => state.window.isOpen);



  const handleClick=()=>{ 
    console.log("this is home page",isOpen)
   
  }

  // const handleBedClick = (bedNumber) => {
  //   setSelectedBed(bedNumber);
  //   // Assuming you want to open the window here based on Redux state
  // };

  // const closeWindow = () => {
  //   // This function is set up, but not used in this code snippet
  // };

  return (
    <div className="h-screen w-full">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">Allocate Beds</h1>
      <Menu name={"Rehabilitation Room"}/>
      <SlidingWindow bedNumber={bedNumber} isOpen={isOpen}/>
      
      
    </div>
  );
}
