import { Routes, Route } from "react-router-dom";
import { AboutUs } from "../pages/AboutUs";
import { Home } from "../pages/Home";
import { PlantsRegistration } from "../pages/PlantsRegistration";
import { ProductDetails } from "../pages/ProductsDetails";
import { ProductList } from "../pages/ProductList";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { SignIn } from "@clerk/clerk-react";

export function Router() {
  return (
    <Routes>
    <Route element={<DefaultLayout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/plants-registration" element={<PlantsRegistration />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/product-list" element={<ProductList />} />
    </Route>
      <Route path="/sing-in" element={<SignIn/>} />
  </Routes>
  );
}
