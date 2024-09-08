import { configureStore } from '@reduxjs/toolkit'
import windowSlice from './features/infowindow/windowSlice'
import windowReducer from './features/infowindow/windowSlice'
// import {numberReducer} from './store/features/mobilenumber/mobileSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
        window: windowReducer
    },
  })
}
