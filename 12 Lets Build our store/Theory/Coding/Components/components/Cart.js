import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>  {

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = (item) =>{
     dispatch(clearCart(item));
  }
  return (
   <div className="text-center m-6 p-16">
    
     <div className="w-6/12 m-auto my-4 p-2">
      <h1 className="font-bold text-4xl ">Your Cart Items</h1>
        <button className="p-4 m-4 w-50 bg-black text-white rounded-lg cursor-pointer" onClick={() =>handleClearCart()}>Clear Cart</button>
        {cartItems.length == 0 ? <h1 className="m-4 p-4 text-3xl">Cart is empty. Add items to cart</h1> : <ItemList items={cartItems}/>}
  
      <ItemList items ={cartItems}/>
     </div>

   </div>
  )
}
export default Cart;