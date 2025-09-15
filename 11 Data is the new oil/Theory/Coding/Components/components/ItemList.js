import { CDN_URL } from "../utils/constants";

const ItemList = ({ items,dummy }) => {
  // console.log(dummy);

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
            <div className="font-bold py-2 ">
              <span>{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}</span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="bg-black text-white w-25 py-2 px-4 shadown-xl mx-10 my-40 rounded-lg">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
