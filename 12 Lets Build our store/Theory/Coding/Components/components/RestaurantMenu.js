import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  const dummy = "dummy data";


  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  // console.log( resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  //filtering the itemcategory
  //if there is @xyz we cannot it directly so for that thing we should wrap it up in sq. bracket inside " "
  //u can see it below
  // c is category
  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      {/* categories accordians below */}
      {categories.map((category,index) => (
        //Controlled Component i.e controlled by parent 
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex = {() => setShowIndex(index === showIndex ? null : index)} //toggle logic here
          dummy ={dummy}
        />
      ))}
    </div>
  ); 
};
export default RestaurantMenu;
