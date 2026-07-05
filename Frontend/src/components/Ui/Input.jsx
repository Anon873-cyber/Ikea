import React from "react";

function Input({ text, className, placeholder }) {
  return (
    <input className={className} name="input" placeholder={placeholder}>
      {text}
    </input>
  );
}

export default Input;
