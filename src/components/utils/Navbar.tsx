import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* Desktop design */}

      <nav className="bg-SpecialGray flex justify-between items-center h-24 max-w-[1240] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold text-green-200">VedPy.</h1>
        <ul className="text-SpecialWhite hidden md:flex ">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="https://github.com/Edi-rgb/VedPy">Github</Link>
          </li>
          <li className="p-4">
            <Link to="/demoapp">Demo</Link>
          </li>
          <li className="p-4">
            <Link to="/Download">Download</Link>
          </li>
        </ul>

        {/*  Mobile design */}

        <div className="text-SpecialWhite bloc md:hidden" onClick={handleNav}>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-SpecialGray ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-green-200 m-4">
            VedPy.
          </h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-700">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 border-b border-gray-700">
              <Link to="https://github.com/Edi-rgb/VedPy">Github</Link>
            </li>
            <li className="p-4 border-b border-gray-700">
              <Link to="/demoapp">Demo</Link>
            </li>
            <li className="p-4">
              <Link to="/Download">Download</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
