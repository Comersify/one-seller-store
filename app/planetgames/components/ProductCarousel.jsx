import { useRef, useState, useEffect } from 'react';

const ProductCarousel = ({ title, products }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.children;
    const child = children[index];
    if (child) {
      child.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const childWidth = container.children[0]?.offsetWidth || 1;
    const index = Math.round(scrollLeft / childWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="mt-16 p-2">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>

      {/* المنتجات */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="px-2 snap-start 
              min-w-[50%] max-w-[50%] 
              sm:min-w-[25%] sm:max-w-[25%] 
              lg:min-w-[16.66%] lg:max-w-[16.66%]"
          >
            <div className="bg-white rounded p-3">
              <a href={product.link}>
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  {product.outOfStock && (
                    <div className="absolute inset-0 bg-gray-500 bg-opacity-60 flex flex-col items-center justify-center">
                      <img
                        src="/assets/out-of-stock.258fd3e9.png"
                        className="w-20 h-20 mb-2"
                        alt="Out of Stock"
                      />
                      <span className="text-white text-md font-bold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
              </a>
              <span className="block text-xs text-gray-500 mb-1">
                {product.category}
              </span>
              <a href={product.link}>
                <h3 className="text-sm font-bold truncate mb-1">
                  {product.title}
                </h3>
              </a>
              <div className="text-primary font-semibold">{product.price}</div>
            </div>
          </div>
        ))}
      </div>

      {/* النقاط */}
      <div className="flex justify-center mt-6 flex-wrap gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-2 transition-all duration-300 ease-in-out ${
              activeIndex === index
                ? 'w-6 bg-blue-500 rounded-full'
                : 'w-2 bg-gray-300 rounded-full opacity-60'
            }`}
          ></button>
        ))}
      </div>

      {/* إخفاء Scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProductCarousel;
