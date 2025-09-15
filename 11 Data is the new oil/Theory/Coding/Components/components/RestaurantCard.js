import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 w-[250px] h-[400px] bg-gray-100 hover:bg-gray-200 rounded-lg overflow-hidden">
      <div className="w-full h-[160px]">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="p-2">
        <h3 className="font-bold py-2 text-xl">{name}</h3>
        <h4 className="py-1 truncate">{cuisines.join(", ")}</h4>
        <h4 className="py-1 font-bold">{avgRating}⭐</h4>
        <h4 className="py-1">{costForTwo}</h4>
        <h4 className="py-1">Delivery: {sla.slaString}</h4>
      </div>
    </div>
  );
};

//Higer Order Component 

//Input --> RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label for="" className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}


export default RestaurantCard;
