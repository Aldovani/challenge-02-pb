import logo from "../assets/logo.svg";
import user from "../assets/user.png";
 
const Header = () => {
  return (
    <header className="flex justify-between items-center p-2 pl-20 pr-20 bg-athena-grey">
      <img src={logo} alt="Logo da Plant Pace" />
      <div className="flex flex-row flex-wrap">
        <ul className="flex flex-row gap-6">
          <li className="text-primary-avacado">Home </li>
          <li className="text-primary-lunar-green">Register </li>
          <li className="text-primary-lunar-green">Products </li>
          <li className="text-primary-lunar-green">About us </li>
        </ul>
      </div>
      <img src={user} alt="Exemplo" />
    </header>
  );
};
 
export default Header;