import React from "react";
import Input from "../Ui/Input";
import SearchImg from "/img/search.png";
function SearchBar() {
  return (
    <div className="flex w-[300px]">
      <Input className="w-full focus:none border-2 outline-none text-[var(--color-text-secondary)]/60 text-opacity-15 font-family:[var(--font-body)] border-[var(--color-accent-light)] " />
      <button className="bg-[var(--color-primary)] p-2">
        <img src={SearchImg} alt="Search" width={25} height={25} />
      </button>
    </div>
  );
}

export default SearchBar;
