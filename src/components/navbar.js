import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../index.css";
function Greet(props) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="bg-gray-800 px-4 py-2">
        <div className="flex justify-between">
          <Link to="/" className="text-white font-bold text-xl">
            Home
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-white hover:text-gray-300">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Greet;
