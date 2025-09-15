import { LOGO_URL } from "../utils/constants";
import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);
  

  //If no dependency array => useEffect is called on every render
  //If dependency array is empty = [] => useEffect is called [just once]
  //If useEffect is [btnNameReact] => useEffect is called everytime when btnNameReact gets updated
  useEffect(() => {
    console.log("useEffect called");
    
  },[]);

  return (
    <div className="flex justify-between bg-green-100 shadow-lg text-lg">
      <div className="logo-container">
        <img className="w-[150px]" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status : {onlineStatus ? '🟢' : '🔴'}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4"><Link to="/">Cart</Link></li>
          <button
            className="login"
            onClick={() =>
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login")
            }
          >
            {btnNameReact}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
