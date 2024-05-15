
import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Steps from "../Components/Steps"
export function DefaultLayout() {
  return (
    <div>
      <Header/>
      <Steps/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}