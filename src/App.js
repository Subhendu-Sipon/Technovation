import React from "react";
import LandingPage from "./Screens/JS/LandingPage";
import useReady from "../src/Components/useReady";
import MyLoader from "./Screens/JS/MyLoader";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import AboutPage from "./Screens/JS/AboutPage";
import Modal from "./Screens/JS/Modal";
import Event from "./Screens/JS/Event";
import Faq from "./Screens/JS/Faq";
import Gallery from "./Screens/JS/Gallery";
import Trailer from "./Screens/JS/Trailer";
import Merchandise from "./Screens/JS/Merchandise";
import Teams from "./Screens/JS/Teams";
import Contact from "./Screens/JS/Contact";
import Login from "./Screens/JS/Login";
import Signup from "./Screens/JS/Signup";

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
