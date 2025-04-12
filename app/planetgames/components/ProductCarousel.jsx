import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // ✅ مهم جدًا!

import 'swiper/css';
import 'swiper/css/pagination';

const ProductCarousel = ({ title, products }) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>

      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded  p-3">
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
                        className="w-30 h-30 mb-2"
                        alt="Out of Stock"
                      />
                      <span className="text-white text-md font-bold">Out of Stock</span>
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 💅 تخصيص شكل النقاط */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative; /* تغيير من absolute إلى relative */
          bottom: -30px; /* تعديل المسافة لتكون أقل */
          left: 0;
          right: 0;
          text-align: center;
        }

        .swiper-pagination-bullet {
          background-color: #d1d5db; /* رمادي خفيف */
          width: 8px;
          height: 8px;
          opacity: 0.6;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background-color: #3b82f6; /* أزرق */
          width: 25px;
          height: 8px;
          border-radius: 9999px; /* يجعلها بيضاوية */
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ProductCarousel;
