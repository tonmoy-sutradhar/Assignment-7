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

  // Increase Price
  const [price, setPrice] = useState(0);

  const handlePriceIncrease = () => {
    setPrice((taka) => taka + 7700000);
  };

  // Show all player
  const [allPlayers, setAllPlayers] = useState([]);

  const handleAllPlayer = (plyer) => {
    const isExist = allPlayers.find((p) => p.id == plyer.id);
    if (isExist) {
      toast.error("Player already exist");
    } else {
      toast.success(
        `congratulation!! ${plyer.name} successfully added on squad.`
      );
      const newPlayer = [...allPlayers, plyer];
      setAllPlayers(newPlayer);
    }
  };

  const handleDeletePlayer = (id) => {
    const RmvPlayerName = allPlayers.find((p) => p.id == id);
    const removePlayer = allPlayers.filter((p) => p.id != id);
    setAllPlayers(removePlayer);

    if (removePlayer) {
      toast.success(`${RmvPlayerName.name} Successfully remove`);
    }
  };

  return (
    <>
      <Navbar price={price}></Navbar>
      <Banner handlePriceIncrease={handlePriceIncrease}></Banner>

      <PlayersContainer
        handleDeletePlayer={handleDeletePlayer}
        allPlayers={allPlayers}
        handleAllPlayer={handleAllPlayer}
        isActive={isActive}
        handlePlayers={handlePlayers}
      ></PlayersContainer>

      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={2000}
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
