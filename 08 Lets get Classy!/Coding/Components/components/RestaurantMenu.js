import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    // console.log(json);
    setResInfo(json);
  };
  
    if (resInfo === null) return <Shimmer />;

  // Safely destructure after state is set
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")}- {costForTwoMessage}
      </p>
      <h1>Menu</h1>
      <ul>{itemCards.map((item) =>
      <li key={item.card.info.id}>{(item.card.info.name)}- {"Rs. "}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
      )}
 
     
       
      </ul>
    </div>
  );
};
export default RestaurantMenu;
