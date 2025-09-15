import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import RestaurantCard from "./components/RestaurantCard";
import RestaurantMenu from "./components/RestaurantMenu";
import {useState,useEffect} from "react";
import User from "./components/User";
import UserContext from "./utils/userContext";

// import Grocery from "./components/Grocery";

//Chunking
//Code Splitting
//Dynamic Bundling
//lazy loading
//on demand loading
//dynamic import

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName,setUserName] = useState();
  
  //Authentication
  useEffect(() => {
    const data = {
      name:"AQUIB"
    };
    setUserName(data.name)
  },[])

  return (
   <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
     <div className="app">
      <Header />
      <Outlet />
      {/* If Path is / then i should have Body */}
      {/* <Body /> */}
      {/* If Path is /about i should have About */}
      {/* <About /> */}
      {/* If Path is /contact i should have Contact */}
      {/* <Contact /> */}
    </div>
   </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
