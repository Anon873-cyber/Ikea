import React from "react";

function button({ className, text, ...props }) {
  return (
    <button className={className} {...props}>
      {text}
    </button>
  );
}

export default button;
