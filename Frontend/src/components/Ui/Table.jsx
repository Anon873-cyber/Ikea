import { Tag } from "lucide-react";

const ProductInfoItem = ({
  icon: Icon = Tag,
  label,
  value,
}) => {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50">
        <Icon className="h-6 w-6 text-indigo-600" strokeWidth={2} />
      </div>

      {/* Label */}
      <p className="w-32 text-lg font-semibold text-slate-900">
        {label}
      </p>

      {/* Colon */}
      <span className="text-lg text-slate-500">:</span>

      {/* Value */}
      <p className="flex-1 text-lg text-slate-700">
        {value}
      </p>
    </div>
  );
};

export default ProductInfoItem;