import React from "react";
import Logo from "../Ui/Logo";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Logo className="text-(--color-heading) text-[34px] [font-family:var(--font-heading)]" />

        <ul className="flex gap-6">
          <li className="text-(--color-text) text-[16px] [font-family:var(--font-body)]">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-(--color-text) text-[16px] [font-family:var(--font-body)]">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="text-(--color-text) text-[16px] [font-family:var(--font-body)]">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="text-(--color-text) text-[16px] [font-family:var(--font-body)]">
            <NavLink to="/wishlist">Wishlist</NavLink>
          </li>
          <li className="text-(--color-text) text-[16px] [font-family:var(--font-body)]">
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>

        <SearchBar />
      </div>
    </nav>
  );
}

export default NavBar;
