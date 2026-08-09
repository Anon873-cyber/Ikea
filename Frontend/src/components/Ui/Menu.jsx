import React from "react";

function Menu({className}) {
  return (
    <section className={className}>
      <div className="relative bg-white border top-10 border-gray-200 w-50 h-50 rounded shadow-sm">
        <div className="absolute -top-2 left-5 w-4 h-4 rotate-45 border-l border-t border-gray-200 bg-white"></div>
      </div>
    </section>
  );
}

export default Menu;
