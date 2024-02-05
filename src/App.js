import React from "react";
import LandingPage from "./Screens/LandingPage";
import useReady from "../src/Components/useReady";
import MyLoader from "./Screens/MyLoader";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import AboutPage from "./Screens/AboutPage";
import Modal from "./Screens/Modal";
import Event from "./Screens/Event";
import Faq from "./Screens/Faq";
import Gallery from "./Screens/Gallery";
import Trailer from "./Screens/Trailer";
import Merchandise from "./Screens/Merchandise";
import Teams from "./Screens/Teams";
import Contact from "./Screens/Contact";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/explore",
    element: <Modal />,
  },
  {
    path: "/events",
    element: <Event />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/trailer",
    element: <Trailer />,
  },
  {
    path: "/cart",
    element: <Merchandise />,
  },
  {
    path: "/team",
    element: <Teams />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  
  const { ready } = useReady(1);

  return (
    <div className="App">
      {ready !== true ? (<MyLoader />) : (<RouterProvider router={router} />)}
    </div>
  );
}

export default App;
