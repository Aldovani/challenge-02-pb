import profiles from "../../constants/profiles.json";
import { TeamItem } from "./item";

export function Team() {
  return (
    <section className="bg-wisper sm:px-20 px-5  py-20">
      <div className="container mx-auto">
        <h2 className="sm:text-8xl text-4xl font-eb-garamond font-bold text-primary-lunar-green">
          Team
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
          {profiles.map((profile) => (
            <TeamItem
              imageUrl={profile.imageUrl}
              name={profile.name}
              path={profile.slug}
              key={profile.slug}
              role={profile.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
  