import React from "react";
import { useState } from "react";

function Currency() {
  const [currency, setCurrency] = useState("USD");
  return (
   
      <span className="text-[var(--color-surface)] font-medium text-[16px]  leading-none [font-family:var(--font-primary)]">
        <select
          className="bg-transparent outline-none cursor-pointer"
          defaultValue="USD"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option
            class=" font-medium  bg-[var(--color-secondary)] "
            value="USD"
          >
            USD ($)
          </option>
          <option class="font-medium bg-[var(--color-secondary)]" value="INR">
            INR (₹)
          </option>
          <option class="font-medium bg-[var(--color-secondary)]" value="JPY">
            JPY (¥)
          </option>
          <option class="font-medium  bg-[var(--color-secondary)]" value="EUR">
            EUR (€)
          </option>
        </select>
      </span>
  
  );
}

export default Currency;
