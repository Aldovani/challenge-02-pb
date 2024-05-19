import { UserButton } from "@clerk/clerk-react";
import logo from "../../assets/logo.svg";
import { ActiveLink } from "./ActiveLink";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <header className="flex justify-between items-center p-2 pl-20 pr-20 bg-wisper">
      <img onClick={handleClick} className="cursor-pointer" src={logo}  alt="Logo da Plant Pace" />
      <nav className="flex flex-row flex-wrap">
        <ul className="flex flex-row gap-6">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/register">Register</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/products">Products</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/about">About us</ActiveLink>
          </li>
        </ul>
      </nav>
      <UserButton />
    </header>
  );
};

export default Header;
