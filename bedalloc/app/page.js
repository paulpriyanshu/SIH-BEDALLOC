"use client"
import React, { useReducer, useState } from 'react';
import {SlidingWindow} from './components/SlidingWindow';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Menu from './components/Menu'
import RoomBar from './components/RoomBar';
import RoomList from './components/RoomList';
import { specialTreatmentRooms } from './api/actions/specialbeds';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';

 function page() {
  // const [selectedBed, setSelectedBed] = useState(null);
  const isWindowOpen = useSelector(state => state.value); // Renamed to avoid conflicts
  const bedNumber = useSelector(state => state.bedNumber); // Ensure this is correctly set in your Redux state
  const router=useRouter()
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
      <NavBar/>
      <div className='flex justify-center '>
      <Dashboard/>
      
      
      </div>
      

      
      
    </div>
  );
}
export default page