export const Product = ({
    category,
    productName,
    price,
    tag,
}: {
    category: string;
    productName: string;
    price: number;
    tag?: string;
}) => {
    return (
        <div className="rounded-md hover:cursor-pointer">
            <div className="bg-gray-400 w-[215px] h-[320px]"></div>
            <div>
                <p className="text-gray-300">{category}</p>
                <p className="text-gray-900 font-bold">{productName}</p>
            </div>
            <p className="text-purple-600 font-bold">{price}</p>
        </div>
    );
};
