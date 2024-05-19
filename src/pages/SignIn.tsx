import { SignInButton } from "@clerk/clerk-react";
import logo from "../assets/logo.svg";
import { PublicRouter } from "../Components/PublicRouter";
export function SignIn() {
  return (
    <PublicRouter>
      <div className="grid lg:grid-cols-2 overflow-y-hidden min-h-screen ">
        <div className="hidden lg:block bg-[url(/bg-sign-in-page.png)] h-full bg-[100%] bg-cover"></div>
        <main className="flex items-center justify-center flex-col">
          <img src={logo} alt="Logo platePeace" />
          <h1 className="sm:text-64 text-4xl font-eb-garamond font-bold  text-primary-lunar-green">
            Welcome back
          </h1>
          <p className="mt-3 font-raleway text-secondary-secondary max-w-[315px] text-center">
            We are your one-stop destination for all things green and growing.{" "}
          </p>
          <SignInButton mode="modal">
            <button className="bg-wisper hover:bg-primary-lunar-green hover:text-white transition-colors font-raleway w-full py-4 max-w-80 mt-8">
              Login{" "}
            </button>
          </SignInButton>
        </main>
      </div>
    </PublicRouter>
  );
}
