import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Header/Navbar";
import PlayersContainer from "./Components/PlayersContainer/PlayersContainer";

function App() {
  // Button Toggle
  const [isActive, setIsActive] = useState({
    player: true,
    status: "player",
  });

  const handlePlayers = (status) => {
    if (status == "player") {
      setIsActive({
        player: true,
        status: "player",
      });
    } else {
      setIsActive({
        player: false,
        status: "selected",
      });
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <PlayersContainer
        isActive={isActive}
        handlePlayers={handlePlayers}
      ></PlayersContainer>
    </>
  );
}

export default App;
