import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Header/Navbar";
import PlayersContainer from "./Components/PlayersContainer/PlayersContainer";
import Footer from "./Components/Footer/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [allPlayers, setAllPlayers] = useState([]);

  const handleAllPlayer = (plyer) => {
    const isExist = allPlayers.find((p) => p.id == plyer.id);
    if (isExist) {
      toast.error("Player already exist");
    } else {
      const newPlayer = [...allPlayers, plyer];
      setAllPlayers(newPlayer);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <PlayersContainer
        handleAllPlayer={handleAllPlayer}
        isActive={isActive}
        handlePlayers={handlePlayers}
      ></PlayersContainer>

      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
