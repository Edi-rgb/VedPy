import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  return (
    <>
      {/* Desktop design */}

      <nav className="bg-SpecialGray flex justify-between items-center h-20 px-7 xl:px-24 sticky top-0">
        <Link to="/" className="w-full text-3xl font-bold text-green-200">
          VedPy.
        </Link>
        <ul className="text-SpecialWhite hidden md:flex font-bold">
          <li className="p-4 hover:text-green-200 hover:bg-slate-700 ease-in-out duration-100 rounded-md ">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4  hover:text-green-200 hover:bg-slate-700 ease-in-out duration-100 rounded-md">
            <a href="https://github.com/Edi-rgb/VedPy" target="_blank">
              Github
            </a>
          </li>
          <li className="p-4  hover:text-green-200 hover:bg-slate-700 ease-in-out duration-100 rounded-md">
            <Link to="/demo">Demo</Link>
          </li>
          <li className="p-4  hover:text-green-200 hover:bg-slate-700 ease-in-out duration-100 rounded-md">
            <Link to="/downloads">Download</Link>
          </li>
        </ul>

        {/*  Mobile design */}
        <MobileNavbar />
      </nav>
    </>
  );
}

export default Navbar;
