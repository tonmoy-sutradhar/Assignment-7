import { useEffect, useState } from "react";
import Player from "../Player/Player";
import SelectedPlayer from "../Player/SelectedPlayer/SelectedPlayer";
import "./PlayersContainer.css";

const PlayersContainer = () => {
  const [players, setPlayers] = useState([]);
  const [isActive, setIsActive] = useState("player");

  useEffect(() => {
    fetch("playerData.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handlePlayers = (type) => {
    setIsActive(type);
  };

  return (
    <div>
      <div className="flex justify-between mx-7 mt-9">
        <div>
          <h1>Players</h1>
        </div>
        <div>
          <button
            onClick={() => handlePlayers("player")}
            className={`${isActive === "player" ? "btns active" : "btns"}`}
          >
            Available
          </button>

          <button
            onClick={() => handlePlayers("selected")}
            className={`${isActive === "selected" ? "btns active" : "btns"}`}
          >
            Selected
          </button>
        </div>
      </div>

      <div className="player-container">
        {isActive === "player" ? (
          players.map((p) => <Player key={p.id} pr={p}></Player>)
        ) : (
          <SelectedPlayer players={players}></SelectedPlayer>
        )}
      </div>
    </div>
  );
};

export default PlayersContainer;
