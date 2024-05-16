import { Outlet } from "react-router-dom";
import Header from "../Components/Header/index";
import Footer from "../Components/Footer";
export function DefaultLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}