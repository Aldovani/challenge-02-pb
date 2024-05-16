import logo from "../../assets/logo.svg";
import user from "../../assets/user.png";
import { ActiveLink } from "./ActiveLink";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-2 pl-20 pr-20 bg-athena-grey">
      <img src={logo} alt="Logo da Plant Pace" />
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
      <img src={user} alt="Exemplo" />
    </header>
  );
};

export default Header;
