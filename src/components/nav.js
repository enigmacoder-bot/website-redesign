import { useRef } from "react";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../index.css";
function Nav() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("hidden");
  };

  return (
    <header className="bar flex justify-between items-center px-4 py-3 md:py-4">
      <img
        class="logo"
        src="./images/logo3.png"
        alt=""
        width="100px"
        height="100px"
      />
      <button className="nav-btn md:hidden" onClick={showNavbar}>
        <FaBars />
      </button>

      <nav class="links hidden md:block" ref={navRef}>
        <Link class="link block mt-4 md:inline-block md:mt-0 md:ml-6" to="/">
          Home{" "}
        </Link>

        <Link
          class="link block mt-4 md:inline-block md:mt-0 md:ml-6"
          to="/about"
        >
          About Us{" "}
        </Link>

        <Link
          class="link block mt-4 md:inline-block md:mt-0 md:ml-6"
          to="/blog"
        >
          Blog{" "}
        </Link>

        <Link
          class="link block mt-4 md:inline-block md:mt-0 md:ml-6"
          to="/contact"
        >
          Contact{" "}
        </Link>

        <button
          className="nav-btn nav-close-btn absolute top-3 right-3 md:hidden"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
    </header>
  );
}

export default Nav;
