"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { RoomGraph } from './RoomGraph';
import { GeneralWardGraph } from './GeneralWardGraph';
import { PACUGraph } from './PACUGraph';
import { ICUGraph } from './ICUGraph';
import { ORGraph } from './ORGraph';
import { RehabilitationGraph } from './RehabilitationGraph';
import { CardiologyGraph } from './CardiologyGraph';
import { ERGraph } from './ERGraph';
import { LDGraph } from './LDGraph';
import { RadiologyGraph } from './RadiologyGraph';
import { PHGraph } from './PHGraph';

const graphData = [
  { Component: RoomGraph, route: '/' },
  { Component: GeneralWardGraph, route: '/GW' },
  { Component: PACUGraph, route: '/PACU' },
  { Component: ICUGraph, route: '/ICU' },
  { Component: ORGraph, route: '/OR' },
  { Component: RehabilitationGraph, route: '/REHAB' },
  { Component: CardiologyGraph, route: '/CCU' },
  { Component: ERGraph, route: '/ER' },
  { Component: LDGraph, route: '/L&D' },
  { Component: RadiologyGraph, route: '/RAD' },
  { Component: PHGraph, route: '/PH' }
];

function Dashboard() {
  const router = useRouter();

  const handleGraphClick = (route) => {
    router.push(route);
  };

  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        {graphData.map(({ Component, route }, index) => (
          <div
            key={index}
            className='w-5/6 cursor-pointer hover:scale-105 transition-transform duration-300'
            onClick={() => handleGraphClick(route)}
          >
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
