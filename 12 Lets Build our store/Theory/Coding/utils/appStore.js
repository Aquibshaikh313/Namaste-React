const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice"

const appStore = configureStore ({
  //below reducer is our whole reducer & inside it has
  // different slices currently cart
  // There can be userReducer..
  reducer:{
    cart: cartReducer,
     
  },
});

export default appStore;