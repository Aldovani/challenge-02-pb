type ProfileProps = {
  name: string;
  imageUrl: string;
  nickname: string;
  about: string;
  hobbies: string[];
  linkedinUrl: string;
  githubUrl: string;
  id: string;
};

export function Profile({
  name,
  about,
  githubUrl,
  hobbies,
  imageUrl,
  linkedinUrl,
  nickname,
  id,
}: ProfileProps) {
  return (
    <article className="bg-white" id={id}>
      <main className="flex  flex-col lg:flex-row px-8 lg:px-20   ">
        <img
          src={imageUrl}
          alt={name}
          className="w-[520px] h-auto object-cover"
        />
        <div className="py-8 lg:ml-28">
          <h3 className="lg:text-8xl text-6xl font-eb-garamond font-bold text-primary-lunar-green">
            {name}
          </h3>
          <span className="mt-4 text-dark-gray font-lato  text-[1.25rem]">
            nickname: {nickname}
          </span>

          <div className="mt-8">
            <strong className="font-eb-garamond font-medium text-2xl text-dark-gray ">
              about
            </strong>
            <p className="text-secondary-secondary font-raleway mt-2 max-w-[520px]">
              {about}
            </p>
          </div>

          <div className="mt-8 max-w-[520px]">
            <strong className="font-eb-garamond font-medium text-2xl text-dark-gray ">
              Hobbies
            </strong>
            <ul>
              {hobbies.map((hobby) => (
                <li className=" text-secondary-secondary font-raleway mt-2">
                  {hobby}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <strong className=" font-eb-garamond font-medium text-2xl text-dark-gray ">
              Social links
            </strong>
            <nav className=" ">
              <ul className="flex gap-4">
                <li>
                  <a
                    href={githubUrl}
                    target="_blank"
                    className="text-secondary-secondary hover:text-secondary-Teak"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    className="text-secondary-secondary hover:text-secondary-Teak"
                  >
                    linkedin
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </article>
  );
}
