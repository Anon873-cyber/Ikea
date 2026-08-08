import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Shop from "./pages/Home.jsx";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import AddToCart from "./pages/AddToCart.jsx";

import AuthLayout from "./components/Auth/Auth.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="contact" element={<Contact />} />
        <Route element={<AuthLayout />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<AddToCart />} />
          <Route path="addtocart" element={<AddToCart />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
