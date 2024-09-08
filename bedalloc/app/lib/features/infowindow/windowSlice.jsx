import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state


// Define the initial state using that type
const initialState = {
    isOpen:false,
    bedNumber:""
}

export const windowSlice = createSlice({
  name: 'window',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   toggle:(state)=>{
    state.isOpen=!state.isOpen
   },
   bednumber:(state)=>{
    state.number=action.payload
   },
   openWindow(state, action) {
    state.isOpen = true;
    state.bedNumber = action.payload;
  },
  closeWindow(state) {
    state.isOpen = false;
    state.bedNumber = null;
  },
  },
})

export const { toggle, bednumber,openWindow,closeWindow } = windowSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state) => state.counter.value

export default windowSlice.reducer