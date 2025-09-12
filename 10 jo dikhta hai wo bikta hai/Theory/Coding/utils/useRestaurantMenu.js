import { useState, useEffect } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(MENU_API_URL + resId);
      const json = await data.json();
      setResInfo(json);
    };
    fetchData();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
