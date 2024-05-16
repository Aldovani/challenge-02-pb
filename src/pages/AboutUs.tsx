import { Profile } from "../Components/Profile";
import profiles from "../constants/profiles.json";

export function AboutUs() {
  return (
    <>
      <section className=" py-52 sm:px-20 px-10 flex justify-center flex-col   bg-wisper">
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
          <ul className="flex items-center  sm:gap-5">
            <li>
              <a
                href="#aldovani"
                className="text-[1.25rem] font-bold font-eb-garamond bg-white flex size-14 items-center justify-center rounded-full hover:bg-primary-lunar-green hover:text-white transition-colors"
              >
                AH
              </a>
            </li>
            <div className="size-3 sm:block bg-white rounded-full"></div>
            <li>
              <a
                href="#beatriz"
                className="text-[1.25rem] font-bold font-eb-garamond bg-white flex size-14 items-center justify-center rounded-full hover:bg-primary-lunar-green hover:text-white transition-colors"
              >
                BZ
              </a>
            </li>
            <div className="size-3 sm:block bg-white rounded-full"></div>

            <li>
              <a
                href="#camila"
                className="text-[1.25rem] font-bold font-eb-garamond bg-white flex size-14 items-center justify-center rounded-full hover:bg-primary-lunar-green hover:text-white transition-colors"
              >
                CM
              </a>
            </li>
            <div className="size-3 sm:block bg-white rounded-full"></div>

            <li>
              <a
                href="#everton"
                className="text-[1.25rem] font-bold font-eb-garamond bg-white flex size-14 items-center justify-center rounded-full hover:bg-primary-lunar-green hover:text-white transition-colors"
              >
                EC
              </a>
            </li>
            <div className="size-3 sm:block bg-white rounded-full"></div>

            <li>
              <a
                href="#talita"
                className="text-[1.25rem] font-bold font-eb-garamond bg-white flex size-14 items-center justify-center rounded-full hover:bg-primary-lunar-green hover:text-white transition-colors"
              >
                TF
              </a>
            </li>
          </ul>
        </nav>
      </section>

      {profiles.map((profile) => (
        <>
          <Profile {...profile} />
          <div className="h-28 bg-athena-grey"></div>
        </>
      ))}
    </>
  );
}
