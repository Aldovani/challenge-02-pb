import profiles from "../constants/profiles.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Team } from "../Components/Team";

export function AboutUsDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  const data = profiles.find((e) => e.slug === name);

  useEffect(() => {
    if (!data) {
      navigate("/about", { replace: true });
    }
  }, [data, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <>
      <section className="  py-52 sm:px-20 px-10 flex justify-center flex-col   bg-wisper">
        <div className="container mx-auto">
          <h1 className="leading-[120%] text-center text-primary-lunar-green font-eb-garamond sm:text-8xl text-5xl  font-bold">
            {data?.name}
          </h1>
        </div>
      </section>

      <section className="sm:px-20 px-5  py-20 ">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10 sm:flex-row justify-between ">
            <div>
              <div className="sm:sticky sm:top-16 ">
                <h2 className="sm:text-8xl text-4xl font-eb-garamond font-bold text-dark-gray">
                  More <br /> about me
                </h2>
              </div>
            </div>
            <div className="max-w-[520px]">
              <section>
                <h3 className="font-eb-garamond font-medium text-2xl text-dark-gray ">
                  about
                </h3>
                <p className="text-secondary-secondary mt-2 font-raleway ">
                  {data?.about}
                </p>
              </section>

              <section className="mt-10">
                <h3 className="font-eb-garamond font-medium text-2xl text-dark-gray ">
                  technologies
                </h3>
                <ul className="flex gap-5 mt-2 flex-wrap">
                  {data?.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="lowercase text-secondary-secondary font-raleway mt-2 "
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-10">
                <h3 className="font-eb-garamond font-medium text-2xl text-dark-gray ">
                  Hobbies
                </h3>
                <ul>
                  {data?.hobbies.map((hobby, index) => (
                    <li
                      key={index}
                      className="text-secondary-secondary font-raleway mt-2 "
                    >
                      {hobby}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-10">
                <h3 className="font-eb-garamond font-medium text-2xl text-dark-gray ">
                  Social links
                </h3>
                <ul className="flex gap-5 mt-3">
                  <li>
                    <a
                      href={data?.githubUrl}
                      target="_blank"
                      className="text-secondary-secondary hover:text-primary-lunar-green"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href={data?.linkedinUrl}
                      target="_blank"
                      className="text-secondary-secondary hover:text-primary-lunar-green"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Team />
    </>
  );
}
