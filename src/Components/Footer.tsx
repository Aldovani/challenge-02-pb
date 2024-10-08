import { Link } from "react-router-dom";
import logo from "../assets/logo2.svg";

const Footer = () => {
  return (
    <footer
      className={`font-raleway text-xs bg-primary-lunar-green bg-opacity-[0.6] mix-blend-multiply  bg-footer-image text-white pb-14`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row  justify-center items-center md:justify-between p-2 pl-20 pr-20">
          <div className="mt-14 mb-20 md:mt-32">
            <h1 className="font-eb-garamond font-bold text-xl2 md:text-xl mb-10">
              Stay Fresh
            </h1>
            <p className="font-thin pb-4">compassinhos@gmail.com</p>
            <p className="font-thin">+55 41 99999-9999</p>
          </div>
          <div className="flex gap-10 md:mt-40">
            <div>
              <ul>
                <li className="font-bold text-lg pb-4">Links</li>
                <li className="font-thin pb-2 hover:text-primary-accent">
                  {" "}
                  <Link to="/about">About us</Link>
                </li>
                <li className="font-thin pb-2 hover:text-primary-accent">
                  {" "}
                  <Link to="/products">Products</Link>
                </li>
                <li className="font-thin hover:text-primary-accent">
                  {" "}
                  <Link to="/blog">Blogs</Link>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="font-bold text-lg pb-4">Comunity</li>
                <li className="font-thin pb-2 hover:text-primary-accent">
                  {" "}
                  <Link to="/about">About us</Link>
                </li>
                <li className="font-thin pb-2 hover:text-primary-accent">
                  {" "}
                  <Link to="/products">Products</Link>
                </li>
                <li className="font-thin hover:text-primary-accent">
                  {" "}
                  <Link to="/blog">Blogs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 ml-10 mr-10 md:mt-24 md:ml-20 md:mr-20">
          <hr className="border-primary-accent" />
        </div>

        <div className="flex justify-between p-4 pl-10 pr-10 md:pl-20 md:pr-20 ">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="Logo da Plant Pace"
                className="cursor-pointer"
              />
            </Link>
          </div>

          <div className="font-thin flex flex-col justify-center items-center w-30 ">
            <p>Compassinhos ®. All rights</p>
            <p>reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
