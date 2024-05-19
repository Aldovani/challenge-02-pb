import logo from "../assets/logo.svg";
import user from "../assets/user.png";
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-2 pl-20 pr-20 bg-athena-grey">
      <img src={logo} alt="Logo da Plant Pace"/>
      <div className="block lg:hidden">
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <nav className="hidden lg:flex lg:flex-row lg:flex-wrap lg:gap-6">
          <a href="#" className="text-primary-avacado">Home </a>
          <a href="#" className="text-primary-lunar-green">Register </a>
          <a href="#" className="text-primary-lunar-green">Products </a>
          <a href="#" className="text-primary-lunar-green">About us </a>
        </nav>
      <img className="hidden lg:block" src={user} alt="Exemplo" />

      <div className={`fixed top-0 right-0 h-full bg-athena-grey transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-3/5 lg:hidden`}>
        <button onClick={toggleMenu} className="absolute top-4 right-4">
          <svg className="w-6 h-6 text-black" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <nav className="flex flex-col mt-16 gap-4 ml-8 text-lg">
          <a href="#" className="text-primary-avacado">Home </a>
          <a href="#" className="text-primary-lunar-green">Register </a>
          <a href="#" className="text-primary-lunar-green">Products </a>
          <a href="#" className="text-primary-lunar-green">About us </a>
          <img className="w-10 h-10" src={user} alt="Exemplo" />
        </nav>
      </div>
    </header>
  );
};
 
export default Header;