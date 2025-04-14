import { useRef, useState, useEffect } from 'react';
import { Product } from './Product'; // تأكد من المسار

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
            min-w-[90%] 
            sm:min-w-[50%] 
            md:min-w-[33.33%] 
            lg:min-w-[25%] 
            xl:min-w-[20%]"
          >
            <Product
              category={product.category}
              productName={product.title}
              price={product.price}
              tag={product.outOfStock ? "outOfStock" : undefined}
              image={product.image}
              link={product.link}
            />
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
