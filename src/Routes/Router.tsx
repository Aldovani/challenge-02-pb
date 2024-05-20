import { Routes, Route } from "react-router-dom";
import { AboutUs } from "../pages/AboutUs";
import { Home } from "../pages/Home";
import { PlantsRegistration } from "../pages/PlantsRegistration";
import { ProductDetails } from "../pages/ProductsDetails";
import { Products } from "../pages/Products";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { SignIn } from "../pages/SignIn";
import { NotFound } from "../pages/NotFound";
import { AboutUsDetails } from "../pages/AboutUsDetails";

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about/:name" element={<AboutUsDetails />} />
        <Route path="/register" element={<PlantsRegistration />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Route>
      <Route path="/sing-in" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
