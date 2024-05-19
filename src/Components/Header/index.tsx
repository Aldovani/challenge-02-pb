import { UserButton } from "@clerk/clerk-react";
import logo from "../../assets/logo.svg";
import { ActiveLink } from "./ActiveLink";
import { Link} from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-wisper">
      <div className="container mx-auto  flex justify-between items-center p-2  ">
        <Link to="/">
          <img className="cursor-pointer" src={logo} alt="Logo da Plant Pace" />
        </Link>
        <div className="flex-1 flex justify-end lg:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <nav>
          <ul className="hidden lg:flex lg:flex-row lg:flex-wrap lg:gap-6">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/plants-registration">Register</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/products">Products</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/about">About us</ActiveLink>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <UserButton />
        </div>

        <div
          className={`fixed top-0 right-0 h-full z-50 bg-athena-grey transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"} w-3/5 lg:hidden`}
        >
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <svg
              className="w-6 h-6 text-black"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <nav>
            <ul className="flex flex-col mt-16 gap-4 ml-8 text-lg">
              <li>
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/plants-registration">Register</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/products">Products</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/about">About us</ActiveLink>
              </li>
              <UserButton />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
