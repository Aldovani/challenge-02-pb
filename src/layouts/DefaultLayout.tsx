import { Outlet } from "react-router-dom";
import Header from "../Components/Header/index";
import { Footer } from "../Components/Footer";
import { PrivateRouter } from "../Components/PrivateRouter";

export function DefaultLayout() {
  return (
    <PrivateRouter>
      <Header />
      <Outlet />
      <Footer />
    </PrivateRouter>
  );
}
