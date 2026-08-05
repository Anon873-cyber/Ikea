import React, { useEffect, useState } from "react";
import Table from "../Ui/Table";
import { Box, Check, ChevronDown, ChevronUp } from "lucide-react";
import axios from "axios";

function MoreProductDesc({ productId }) {
  const lucideIcons = ["Box", "Check", "ChevronDown", "ChevronUp"];
  const [error, setError] = useState(null);
  const [responce, setResponce] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/products/${productId}`,
        );
        setResponce(responce.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div className="MoreProductAdditionalInfo w-6xl h-[546px] flex  bg-white rounded-xl flex-col  gap-5 border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex items-center gap-2 p-5 font-[var(--font-heading)] text-[var(--color-heading)] font-medium text-xl">
        <Box className="w-8 h-8" /> Product Details
      </div>
      <div className="flex flex-col max-w-[60%]"></div>
    </div>
  );
}

export default MoreProductDesc;
