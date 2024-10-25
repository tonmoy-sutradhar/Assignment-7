import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="bg-black">
        <div className=" imageeee">
          <img src="https://i.ibb.co.com/Rzm1BbG/logo-footer.png" alt="" />
        </div>
      </div>
      <footer className="footer bg-black p-10 text-white  border-b-2 border-gray-500 ">
        <nav>
          <h6 className="text-xl font-bold text-white">About Us</h6>
          <p className="w-96 text-gray-500">
            We are a passionate team dedicated to providing the best services to
            our customers. Our commitment to excellence is reflected in our core
            values of integrity, innovation, and customer satisfaction. We
            believe in building lasting relationships and strive to exceed
            expectations in every interaction.
          </p>
        </nav>

        <nav>
          <h6 className="text-xl font-bold text-white">Quick Links</h6>
          <a className="link link-hover text-gray-500">Home</a>
          <a className="link link-hover text-gray-500">Service</a>
          <a className="link link-hover text-gray-500">About</a>
          <a className="link link-hover text-gray-500">Contact</a>
        </nav>
        <form>
          <h6 className="text-xl font-bold text-white">Subscribe</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="text-gray-500">
                Subscribe to our newsletter for the latest updates.
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="bg-black p-6 ">
        <h1 className="text-gray-500 font-bold text-center">
          @2024 Your Company All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
