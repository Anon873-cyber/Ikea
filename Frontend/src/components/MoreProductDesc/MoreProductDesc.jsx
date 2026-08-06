import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Check, Tag, Scale, Shield } from "lucide-react";

import Table from "../Ui/Table";

function MoreProductDesc({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!productId) return;

    const controller = new AbortController();

    const fetchProduct = async () => {
      setLoading(true);
      setError("");

      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/v1/products/${productId}`,
          {
            signal: controller.signal,
          },
        );

        setProduct(data?.data?.[0] || null);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(
            err.response?.data?.message ||
              err.message ||
              "Something went wrong.",
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();

    return () => controller.abort();
  }, [productId]);

  if (loading) {
    return (
      <div className="w-6xl rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-slate-500 animate-pulse">
          Loading product details...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-6xl rounded-xl border border-red-200 bg-red-50 p-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-6xl rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-slate-500">No product found.</p>
      </div>
    );
  }

  return (
    <div className="w-6xl rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <Box className="h-8 w-8 text-indigo-600" />
        <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-heading)]">
          Product Details
        </h2>
      </div>

      <div className="max-w-2xl space-y-2">
        <Table icon={Box} label="Product Name" value={product.productName} />

        <Table icon={Tag} label="Price" value={`₹${product.price}`} />

        <Table icon={Check} label="Brand" value={product.brand} />

        <Table icon={Scale} label="Weight" value={product.weight || 0} />

        <Table icon={Shield} label="Warranty" value={product.warranty || 'No'} />
      </div>
    </div>
  );
}

export default MoreProductDesc;
