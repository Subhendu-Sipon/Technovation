import React from "react";
import LandingPage from "./Screens/LandingPage";
import useReady from "./Components/useReady";
import MyLoader from "./Screens/MyLoader";


function App() {
  
  const { ready } = useReady(3000);

  return (
    <div className="App">
      {ready !== true ? (<MyLoader />) : (<LandingPage />)}
    </div>
  );
}

export default App;
