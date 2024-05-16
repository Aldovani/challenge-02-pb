import { Outlet } from "react-router-dom";
import Header from "../components/Header/index";
import Footer from "../components/Footer";
export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
