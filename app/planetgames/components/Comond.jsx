import Image from "next/image";
import React from "react";

const Comond = ({
  image,
  title,
  price,
  quantity,
  total,
  onRemove,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex gap-3 items-center p-3 rounded-xl bg-gray-20 hover:bg-gray-50 transition-colors border">
        <div className="flex-none h-20 rounded-lg overflow-hidden bg-white border">
          <Image width={200} height={200} src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900 truncate">{title}</div>
              <div className="mt-1 text-lg font-bold text-gray-600">
                <span className="text-purple-600 ">{price}</span> × {quantity}
              </div>

              <div className="text-md font-bold text-gray-900">{price * quantity}</div>
            </div>

            <button
              onClick={onRemove}
              className="flex-none w-8 h-8 rounded-lg  hover:bg-white/80 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
            >
              {/* أيقونة سلة المهملات */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m-4 0h14" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Comond;
