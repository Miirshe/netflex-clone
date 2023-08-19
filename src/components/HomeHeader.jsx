import { Link } from "react-router-dom";
import NetFlexLogo from "../assets/NetFlex.svg";
const HomeHeader = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center gap-2 p-1"
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0/50%),rgb(0 0 0/50%)), 
    url(./images/misc/home.jpeg)`,
      }}
    >
      <header className="w-full flex flex-row justify-between items-center gap-3 p-1">
        <div>
          <Link to="/">
            <img
              className="w-30 h-16 ml-5"
              src={NetFlexLogo}
              alt="NetFlex profile"
            />
          </Link>
        </div>
        <div>
          <Link
            className="px-4 py-2 text-lg mr-5 rounded text-white bg-red-500 shadow"
            to="/Login"
          >
            Login
          </Link>
        </div>
      </header>
      <main className="text-white text-center flex flex-1 flex-col justify-center items-center gap-2 space-y-3">
        <h1 className="text-3xl lg:text-5xl tracking-wider font-bold">
          Unlimited Movies , TV Shows , and more
        </h1>
        <h2 className="text-2xl lg:text-3xl">Watch any where , Cancel any time </h2>
        <p className="text-xl tracking-tighter">
          ready to watch ? enter your email to create or restart your membership
        </p>
        <div className="text-white flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <input
            className="px-8 py-4 shadow outline-white border-white "
            type="email"
            placeholder="Enter your email"
          />
          <button className="text-center px-5 py-4 shadow bg-red-500 text-white">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomeHeader;
