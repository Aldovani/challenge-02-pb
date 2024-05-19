import { NavLink } from "react-router-dom";

type TeamItemProps = {
  path: string;
  imageUrl: string;
  name: string;
  role: string;
};

export function TeamItem({ imageUrl, path, name, role }: TeamItemProps) {
  const firstName = name.split(" ")[0];
  return (
    <NavLink to={`/about/${path}`} className="overflow-hidden  relative h-full">
      <div
        className={`hover:scale-[1.2] transition-all bg-[url(${imageUrl})]  bg-cover bg-center h-[550px]`}
      >
        <div className="flex flex-col items-center gap-1 absolute bottom-20 left-1/2 -translate-x-1/2">
          <h4 className="font-eb-garamond font-bold text-[2.5rem] text-white">
            {firstName}
          </h4>
          <h6 className="text-dark-gray text-[1.5rem] font-eb-garamond">
            {role}
          </h6>
        </div>
      </div>
    </NavLink>
  );
}
