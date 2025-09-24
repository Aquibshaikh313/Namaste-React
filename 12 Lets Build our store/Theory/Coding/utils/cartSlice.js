import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name : 'cart',
  initialState : {
    items: []
  },
  //modifiers the state reducers is requred
  reducers:{
    addItem:(state,action) =>{
      //mutating the state over here i.e we are modifying the state
      state.items.push(action.payload);
    },
    removeItem:(state,action) =>{
      state.items.pop();
    },
    //no need of action in below since we are clearing the cart 
    clearCart:(state) => {
      state.items.length = 0;
    }
  }
});

//export the action and this export is given by redux/toolkit (rtk)
export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;