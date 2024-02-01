import React from "react";
import LandingPage from "./Screens/LandingPage";
import useReady from "./Components/useReady";
import MyLoader from "./Screens/MyLoader";
import './App.css'

function App() {
  
  const { ready } = useReady(60000);

  return (
    <div className="App">
      {ready !== true ? (
        <MyLoader />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}

export default App;
