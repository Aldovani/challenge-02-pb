import HeroHome from "../Components/HeroHome";
import Steps from "../Components/Steps/";
import Slide from "../Components/slide/Index";

export function Home() {
  return (
    <div className="w-screen">
      <HeroHome />
      <Steps />
      <Slide />
    </>
  );
}
