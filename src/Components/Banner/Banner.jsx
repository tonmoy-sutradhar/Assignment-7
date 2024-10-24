import "./Banner.css";

const Banner = () => {
  return (
    <div className="cover-img">
      <img
        className=" mb-6 img"
        src="https://i.ibb.co.com/Z6Cn1NQ/banner-main.png"
        alt=""
      />

      <h1 className="text-4xl font-bold text-center text-white mb-5 ">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <h2 className="text-2xl font-bold text-center text-white mb-5">
        Beyond Boundaries Beyond Limits
      </h2>
      <div className="text-center">
        <button className="btn text-small font-bold ">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Banner;
