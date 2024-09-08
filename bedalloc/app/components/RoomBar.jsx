"use client";
import { useRouter, usePathname } from 'next/navigation';
import React, { useState } from 'react';

function RoomBar() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const [activeButton, setActiveButton] = useState(pathname); // Set the active button based on the current route

  const handleClick = (route) => {
    setActiveButton(route); // Update the active button
    router.push(route); // Navigate to the clicked route
  };

  const buttons = [
    { label: 'ALL', route: '/'},
    { label: 'GW', route: '/GW' },
    { label: 'OR', route: '/OR' },
    { label: 'PACU', route: '/PACU' },
    { label: 'ICU', route: '/ICU' },
    { label: 'CCU', route: '/CCU' },
    { label: 'ER', route: '/ER' },
    { label: 'L&D', route: '/L&D' },
    { label: 'RAD', route: '/RAD' },
    { label: 'PH', route: '/PH' },
    { label: 'REHAB', route: '/REHAB' }
  ];

  return (
    <div className='w-1/6 h-full'>
      <div className="flex  flex-col mr-10 border border-slate-900  w-full">
        {buttons.map((button) => (
          <button
            key={button.route}
            onClick={() => handleClick(button.route)}
            className={` p-2 py-3 px-5 text-2xl m-3  font-semibold border border-black hover:cursor-pointer ${
              activeButton === button.route ? 'bg-slate-300' : 'hover:bg-slate-300'
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RoomBar;
