import { Navigate, Outlet } from "react-router-dom";
import Header from "../Components/Header/index";
import { Footer } from "../Components/Footer";
import { useAuth } from "@clerk/clerk-react";
import StepsPage from "../Components/Steps/index";

export function DefaultLayout() {
  const {isSignedIn, isLoaded} = useAuth()
  if(!isLoaded) return ''
  console.log(isSignedIn)
  if (!isSignedIn) return <Navigate to='sing-in'/> 
 
  return (
    <div>
      <Header/>
      <StepsPage/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}