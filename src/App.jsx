import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Header/Navbar";
import PlayersContainer from "./Components/PlayersContainer/PlayersContainer";
import Footer from "./Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Subcribe from "./Components/Subcribe/Subcribe";

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

  // Price
  const [price, setPrice] = useState(0);

  // This is for Automatic Claim price
  const handlePriceIncrease = () => {
    setPrice((taka) => taka + 7700000);
  };

  const handleDecresePrice = (pric) => {
    if (price == 0) {
      toast.warning("Balance is Very low!!");
    } else {
      setPrice(price - pric);
    }
  };

  const handleAfterDeleteP = (id) => {
    const plyr = allPlayers.find((p) => p.id == id);
    setPrice(price + plyr.price);
  };

  // Show all player
  const [allPlayers, setAllPlayers] = useState([]);

  const handleAllPlayer = (plyer) => {
    if (allPlayers.length >= 6) {
      toast.warning("Maximum player capacity End!");
      return;
    }

    if (price <= 0 || price < plyer.price) {
      toast.warning("Balance is too low!");
      return;
    }

    handleDecresePrice(plyer.price);
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
    handleAfterDeleteP(id);
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

      <Subcribe></Subcribe>
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
