import React from "react";
import Table from "../Ui/Table";
import { Box, Check, ChevronDown, ChevronUp } from "lucide-react";

function MoreProductAdditionalInfo() {
  return (
    <div className="MoreProductAdditionalInfo w-6xl h-[546px] flex  bg-white rounded-xl flex-col shadow-xl gap-5">
      <div className="flex items-center gap-2 p-5 font-[var(--font-heading)] text-[var(--color-heading)] font-medium text-xl">
        <Box className="w-8 h-8" /> Product Details
      </div>
      <div className="flex flex-col max-w-[60%]">

      </div>
    </div>
  );
}

export default MoreProductAdditionalInfo;
