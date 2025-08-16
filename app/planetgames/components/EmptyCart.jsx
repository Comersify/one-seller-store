import { useState, useEffect } from 'react';
import Comond from "../components/Comond";

const EmptyCart = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  // سلة المنتجات (يمكنك تحديثها من Props أو Context لاحقًا)
  const cartItems = [
    {
      image: "https://backend.odigix.com/storage/643/conversions/jup12months-large.jpg",
      title: "Modern Chair",
      price: "$99.99",
      quantity: 2,
      total: "$199.98",
      onRemove: () => alert("Remove clicked"),
    },
    // يمكنك إضافة المزيد هنا
  ];

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end items-center transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`fixed right-0 top-0 h-screen w-full sm:w-1/3 bg-white shadow-lg z-50 transition-all duration-300 transform ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex-none px-4 py-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <h2 className="text-lg font-medium truncate">Cart</h2>
            </div>
            <button
              onClick={handleClose}
              className="flex-none w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        {cartItems.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
              {cartItems.map((item, index) => (
                <Comond
                  key={index}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  total={item.total}
                  onRemove={item.onRemove}
                />
              ))}
            </div>

            {/* Total & Checkout */}
            <div className="flex-none border-t px-4 py-4 bg-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600 font-bold ">Total</span>
                <span className="text-lg font-bold text-primary truncate">
                  2390 DZD
                </span>
              </div>
              <a
                className="q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable w-full h-11"
                href="/checkout/cart"
              >
                <span className="q-focus-helper"></span>
<span className="q-btn__content text-center col items-center q-anchor--skip justify-center row">
  <div className="flex items-center justify-center bg-purple-600 gap-2">
    {/* كلمة Checkout كأيقونة بنفسجية */}
    <span className="truncate p-6 bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-semibold flex items-center gap-2">
      {/* أيقونة السهم لليسار */}
     
      Checkout
    </span>
  </div>
</span>

              </a>
            </div>
          </>
        ) : (
          <div className="flex-1 overflow-y-auto px-4 w-full">
            <div className="h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="w-24 h-24 rounded-2xl bg-gray-50 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-cart-icon w-12 h-12 text-gray-300"
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 text-sm max-w-[200px]">Add items to start a new order</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmptyCart;
