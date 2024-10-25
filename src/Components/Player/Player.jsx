import "./Player.css";

const Player = ({ pr, handleAllPlayer }) => {
  const {
    name,
    image,
    price,
    country,
    bating_position,
    player_status,
    rating,
  } = pr;

  return (
    <div>
      <div className="player-card">
        <img className="w-50 h-80" src={image} alt="" />
        <div className="flex justify-start items-center gap-3 mt-3">
          <img className="w-8 border-2 rounded-full" src={image} alt="" />
          <span className="text-xl font-bold">{name}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <div className="flex justify-center items-center gap-3 mt-3">
            <img
              className="w-6"
              src={"https://img.icons8.com/?size=80&id=WT7wa2uOjvlZ&format=png"}
              alt=""
            />
            <span className="text-small font-semibold text-gray-500">
              {country}
            </span>
          </div>
          <h1 className="text-small font-semibold text-gray-500 border-gray-500 bg-gray-100 p-2 rounded-xl">
            {player_status}
          </h1>
        </div>
        <hr />
        <div className="flex justify-between items-center ">
          <h1 className="text-small font-semibold mt-2 ">Rating:</h1>
          <h1 className="text-gray-500">{rating}</h1>
        </div>
        <div className="flex justify-between items-center ">
          <h1 className="text-small font-semibold mt-2 ">Bating position:</h1>
          <h1 className="text-gray-500 ">{bating_position}</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-small font-semibold ">price: ${price}</h1>

          <button onClick={() => handleAllPlayer(pr)} className="btn">
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
