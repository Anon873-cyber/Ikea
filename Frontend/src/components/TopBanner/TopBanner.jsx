import React from "react";
import Currency from "../Ui/Currency";
import {
  RiUser3Line,
  RiHeart3Line,
  RiShoppingCartLine,
} from "@remixicon/react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux"; 

function TopBanner() {
  const authStatus = useSelector((state) => state.auth.status);
  const userName = useSelector((state) => state?.auth?.userData?.username);
  return (
    <header className="bg-[var(--color-secondary)]">
      <div className=" max-w-[1250px]  h-11 m-auto flex items-center">
        <div className="flex gap-2 items-center">
          <img src="/img/email.png" className="w-4 pt-1 " alt="Top Banner" />
          <h2 className=" text-[16px] font-medium [font-family:var(--font-primary)] text-[var(--color-surface)]">
            async2304@gmail.com
          </h2>
        </div>
        <ul className="flex gap-6 items-center h-[16px] text-[16px] ml-auto mr-4">
          <li className="flex items-center">
            <Currency />
          </li>
          <li className="text-[var(--color-surface)] flex gap-2 items-center font-medium text-[14px] [font-family:var(--font-primary)]">
            <RiUser3Line size={16} />
            {authStatus ? (
              <NavLink to="/profile">{userName}</NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
          <li className="text-[var(--color-surface)] flex gap-2 items-center font-medium cursor-pointer text-[14px] [font-family:var(--font-primary)]">
            <RiHeart3Line size={16} />
            <NavLink to="/wishlist">Wishlist</NavLink>
          </li>
          <li className="text-[var(--color-surface)] flex gap-2 items-center font-medium cursor-pointer text-[14px] [font-family:var(--font-primary)]">
            <RiShoppingCartLine size={16} />
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default TopBanner;
