import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-7 mt-2 ">
      <div>
        <img src="https://i.ibb.co.com/K0Kfgzr/logo.png" alt="img" />
      </div>
      <div className="text-xl font-bold flex justify-center items-center gap-8">
        <p>Home</p>
        <p>Fixture</p>
        <p>Teams</p>
        <p>Schedules</p>
        <h1 className="flex gap-2 border-2 border-sky-300 p-2 rounded-xl">
          <span>0</span>
          Coins
          <img
            className="w-8"
            src="https://img.icons8.com/?size=48&id=13132&format=png"
            alt=""
          />
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
