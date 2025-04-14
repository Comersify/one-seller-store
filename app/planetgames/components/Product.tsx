export const Product = ({
    category,
    productName,
    price,
    tag,
    image,
    link,
  }: {
    category: string;
    productName: string;
    price: number;
    tag?: string;
    image: string;
    link: string;
  }) => {
    return (
      <a href={link}>
        <div className="rounded-md hover:cursor-pointer bg-white p-2"> 
          <div className="relative  mb-2 overflow-hidden rounded bg-gray-200 h-[280px]"> 
            <img
              src={image}
              alt={productName}
              className="w-full h-full object-cover"
            />
            {tag === "outOfStock" && (
              <div className="absolute inset-0 bg-gray-500 bg-opacity-60 flex flex-col items-center justify-center">
                <img
                  src="/assets/out-of-stock.258fd3e9.png"
                  className="w-12 h-12 mb-1"
                  alt="Out of Stock"
                /> 
                <span className="text-white text-sm font-bold">Out of Stock</span> 
              </div>
            )}
          </div>
          <p className="text-[10px] text-gray-500 mb-1">{category}</p>
          <p className="text-xs font-semibold truncate mb-1 text-gray-900">{productName}</p>
          <p className="text-sm text-purple-600 font-bold">{price}</p>
        </div>
      </a>
    );
  };
  