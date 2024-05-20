import clerk from "../assets/clerk.svg";
import splide from "../assets/splide.svg";
import vite from "../assets/vite.svg";
import typescript from "../assets/typescript.svg";
import tailwindcss from "../assets/tailwindcss.svg";

import { NavLink } from "react-router-dom";
import { Team } from "../Components/Team";

export function AboutUs() {
  return (
    <>
      <main className=" py-52 sm:px-20 px-4 flex justify-center flex-col   bg-wisper">
        <div className="container mx-auto">
          <h1 className="leading-[120%] text-primary-lunar-green font-eb-garamond sm:text-64 text-5xl  font-bold">
            About us
          </h1>
          <p className="mt-2 max-w-[38.125rem] text-sm sm:text-base text-secondary-secondary font-raleway leading-[150%] ">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <nav className="mt-8">
            <ul className="flex items-center gap-1  sm:gap-5">
              <li>
                <NavLink
                  to="/about/aldovani"
                  className="text-[1.25rem] font-bold font-eb-garamond bg-white flex size-12 sm:size-14 items-center justify-center rounded-full hover:bg-primary-lunar-green hover:text-white transition-colors"
                >
                  AH
                </NavLink>
              </li>
              <div className="size-3 sm:block bg-white rounded-full"></div>
              <li>
                <NavLink
                  to="/about/beatriz"
                  className="text-[1.25rem] font-bold font-eb-garamond bg-white flex size-12 sm:size-14 items-center justify-center rounded-full hover:bg-primary-lunar-green hover:text-white transition-colors"
                >
                  BZ
                </NavLink>
              </li>
              <div className="size-3 sm:block bg-white rounded-full"></div>

              <li>
                <NavLink
                  to="/about/camila"
                  className="text-[1.25rem] font-bold font-eb-garamond bg-white flex size-12 sm:size-14 items-center justify-center rounded-full hover:bg-primary-lunar-green hover:text-white transition-colors"
                >
                  CM
                </NavLink>
              </li>
              <div className="size-3 sm:block bg-white rounded-full"></div>

              <li>
                <NavLink
                  to="/about/everton"
                  className="text-[1.25rem] font-bold font-eb-garamond bg-white flex size-12 sm:size-14 items-center justify-center rounded-full hover:bg-primary-lunar-green hover:text-white transition-colors"
                >
                  EC
                </NavLink>
              </li>
              <div className="size-3 sm:block bg-white rounded-full"></div>

              <li>
                <NavLink
                  to="/about/talita"
                  className="text-[1.25rem] font-bold font-eb-garamond bg-white flex size-12 sm:size-14 items-center justify-center rounded-full hover:bg-primary-lunar-green hover:text-white transition-colors"
                >
                  TF
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </main>

      <section className="sm:px-20 px-4  py-20 ">
        <div className="container mx-auto flex flex-col gap-10 sm:flex-row justify-between ">
          <div>
            <div className=" sm:sticky sm:top-16 ">
              <h2 className="text-6xl lg:text-8xl font-eb-garamond font-bold text-primary-lunar-green">
                PlantPeace
              </h2>
              <p className="font-lato font-bold text-dark-gray text-2xl">
                challenge-02
              </p>
            </div>
          </div>
          <div className="sm:max-w-[520px]">
            <section>
              <h3 className="font-eb-garamond font-medium text-2xl text-dark-gray ">
                about
              </h3>
              <div>
                <p className="text-secondary-secondary font-raleway ">
                  Our project is a fictional online plant store built using
                  React. It offers a seamless browsing experience, allowing
                  users to explore a curated collection of plants from the
                  comfort of their homes. The website features user
                  authentication powered by Clerk for secure access.
                </p>
                <p className="text-secondary-secondary font-raleway mt-2">
                  With a focus on quality and usability, the project aims to
                  provide plant enthusiasts with an enjoyable and informative
                  shopping experience. Whether you're a seasoned gardener or
                  just starting your green journey, our platform offers
                  something for everyone. Welcome to our virtual botanical
                  paradise!
                </p>
              </div>
            </section>

            <section className="mt-10">
              <h3 className="font-eb-garamond font-medium text-2xl text-dark-gray ">
                technologies
              </h3>
              <ul className="flex gap-5 mt-3">
                <li>
                  <img src={vite} alt="vite logo" title="vite logo" />
                </li>
                <li>
                  <img
                    src={tailwindcss}
                    alt="tailwindcss logo"
                    title="tailwindcss logo"
                  />
                </li>
                <li>
                  <img src={splide} alt="splide logo" title="splide logo" />
                </li>
                <li>
                  <img src={clerk} alt="clerk logo" title="clerk logo" />
                </li>
                <li>
                  <img src={typescript} alt="clerk logo" title="clerk logo" />
                </li>
              </ul>
            </section>
            <section className="mt-10">
              <h3 className="font-eb-garamond font-medium text-2xl text-dark-gray ">
                requirements
              </h3>
              <ul>
                <li className="text-secondary-secondary font-raleway mt-2 ">
                  Use TypeScript for typing.
                </li>
                <li className="text-secondary-secondary font-raleway mt-2 ">
                  Implement user authentication using Clerk.
                </li>
                <li className="text-secondary-secondary font-raleway mt-2 ">
                  Use React Router for creating protected routes.
                </li>
                <li className="text-secondary-secondary font-raleway mt-2 ">
                  Implement sliders/carousels for displaying plants on the Home
                  page.
                </li>
                <li className="text-secondary-secondary font-raleway mt-2 ">
                  Use JSON Server to simulate a database and implement at least
                  one POST and one GET method.
                </li>
                <li className="text-secondary-secondary font-raleway mt-2 ">
                  Ensure real-time rendering of plants when registering.
                </li>
                <li className="text-secondary-secondary font-raleway mt-2 ">
                  Implement validation for all form fields.
                </li>
                <li className="text-secondary-secondary font-raleway mt-2 ">
                  Ensure responsiveness of the application.
                </li>
                <li className="text-secondary-secondary font-raleway mt-2 ">
                  Create a private GitHub repository and add instructors as
                  collaborators.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <Team />
    </>
  );
}
