import React from "react";
import LandingPage from "./Screens/LandingPage";
import useReady from "./Components/useReady";
import MyLoader from "./Screens/MyLoader";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import AboutPage from "./Screens/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

function App() {
  
  const { ready } = useReady(1000);

  return (
    <div className="App">
      {ready !== true ? (<MyLoader />) : (<RouterProvider router={router} />)}
    </div>
  );
}

export default App;
