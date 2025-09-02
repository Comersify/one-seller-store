import Image from "next/image";
import Link from "next/link";
import { MEDIA_URL } from "../../../urls";

export const Product = ({
  category,
  productName,
  price,
  tag,
  image,
  link,
  isLoading = false, // 🔹 حالة التحميل
}: {
  category: string;
  productName: string;
  price: number;
  tag?: string;
  image: string;
  link: string;
  isLoading?: boolean;
}) => {
  if (isLoading) {
    return (
      <div className="rounded-md bg-white p-2 w-full max-w-sm animate-pulse">
        <div className="relative mb-2 overflow-hidden rounded bg-slate-300 h-[280px]"></div>
        <div className="h-2 bg-slate-300 rounded w-1/2 mb-1"></div>
        <div className="h-3 bg-slate-300 rounded w-3/4 mb-1"></div>
        <div className="h-4 bg-slate-300 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <Link href={link}>
      <div className="rounded-md hover:cursor-pointer bg-white p-2">
        <div className="relative mb-2 overflow-hidden rounded bg-gray-200 h-[280px]">
          <Image
            src={`${MEDIA_URL}/${image}`}
            alt={productName}
            width={10000}
            height={10000}
            className="w-full h-full object-cover"
          />
          {tag === "outOfStock" && (
            <div className="absolute inset-0 bg-gray-500 bg-opacity-60 flex flex-col items-center justify-center">
              <img
                src="/assets/out-of-stock.258fd3e9.png"
                className="w-12 h-12 mb-1"
                alt="Out of Stock"
              />
              <span className="text-white text-sm font-bold">
                Out of Stock
              </span>
            </div>
          )}
        </div>
        <p className="text-[10px] text-gray-500 mb-1">{category}</p>
        <p className="text-xs font-semibold truncate mb-1 text-gray-900">
          {productName}
        </p>
        <p className="text-sm text-purple-600 font-bold">{price} DZD</p>
      </div>
    </Link>
  );
};
