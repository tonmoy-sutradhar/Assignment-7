import "./Subcribe.css";
const Subcribe = () => {
  return (
    <div className="footer-img   text-black subcrbe text-center border border-t-2 border-y-2">
      <h1 className="text-4xl font-bold mb-3">Subscribe to our Newsletter</h1>
      <h3 className="text-small font-bold text-gray-500 mb-3">
        Get the latest updates and news right in your inbox!
      </h3>

      <input
        type="text"
        placeholder="Enter Your Email.."
        className="input input-bordered input-accent w-full max-w-xs"
      />

      <button className="btn ml-4">Subscribe</button>
    </div>
  );
};

export default Subcribe;
