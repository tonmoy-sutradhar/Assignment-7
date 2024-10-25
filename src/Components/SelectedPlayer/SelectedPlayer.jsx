import { toast } from "react-toastify";
import "./SelectedPlayer.css";
import PlayersContainer from "../PlayersContainer/PlayersContainer";

const SelectedPlayer = ({ allPlayers, handleDeletePlayer, handlePlayers }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold ml-8">
        selected player ({allPlayers.length} / 6)
      </h1>

      {allPlayers.map((p, indx) => (
        <div
          key={p.indx}
          className="flex justify-between items-center mt-6 w-screen border-b-2 "
        >
          <div className="flex justify-center items-center gap-3 ml-7">
            <div>
              <img className="w-12 rounded-xl" src={p.image} alt="" />
            </div>
            <div>
              <h1 className="text-xl font-bold">{p.name}</h1>
              <p className=" font-semibold text-gray-500">{p.player_status}</p>
            </div>
          </div>
          <div className="mr-10">
            <button onClick={() => handleDeletePlayer(p.id)}>
              <img
                className="w-10"
                src="https://img.icons8.com/?size=80&id=KHzt2hd6uNh5&format=png"
                alt=""
              />
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={() => handlePlayers("player")}
        className="btn mt-6 ml-7 mb-5"
      >
        Add More Player
      </button>
    </div>
  );
};

export default SelectedPlayer;
