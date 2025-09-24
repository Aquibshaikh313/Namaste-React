import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import React, { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

 const {loggedInUser,setUserName} = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // console.log("Body Rendered", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2706759&lng=77.4630265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json); // check structure
    //optional chaining- rendering on the basis of condition is known as

    // const restaurants =
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants || [];

    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    1;
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering--->rendering on the basis of condition is known as conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Your offline check your internet connection</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search here"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-0.75 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter the restaurant cards and update the UI
              //searchText
              // console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className=" m-4 p-4">
          <button
            className="px-4 py-0.75 bg-gray-200 m-4 rounded-lg font-bold"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label className="px-2">UserName:</label>
          <input className="border border-black p-2"
          value={loggedInUser} 
          onChange={(e) => setUserName(e.target.value)}
          />

        </div>
        
      </div>
      <div className="flex flex-wrap  ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            
            {/* if the restaurant is promoted add a promoted label to it */}

           { restaurant.info.promoted  ? (
            <RestaurantCardPromoted  resData={restaurant} />
          ) : (
            <RestaurantCard resData={restaurant} />
            )}

          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
