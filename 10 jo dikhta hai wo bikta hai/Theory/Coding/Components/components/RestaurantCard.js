import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {cloudinaryImageId, name, avgRating, cuisines, costForTwo,sla} = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] h-[550px] bg-[#dfd2d2]" >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2 text-xl">{name}</h3>
      <h4 className="py-2">{cuisines.join(", ")}</h4>
      <h4 className="py-2 font-bold">{avgRating}⭐</h4>
      <h4 className="py-2">{costForTwo}</h4>
      <h4 className="py-2">Delivery: {sla.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;