import React from 'react'
import RoomBar from './RoomBar'
import RoomList from './RoomList'
import { specialTreatmentRooms } from '../api/actions/specialbeds'

function Menu({name}) {
  return (
    <div>
         <div className='flex justify-center'>
      <RoomBar/>
      <RoomList rooms={specialTreatmentRooms} name={name} />
      
      
        

      </div>
    </div>
    
  )
 
  
}
Menu.defaultProps = {
    name: undefined
  }

export default Menu