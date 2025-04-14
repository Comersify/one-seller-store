"use client";
import { Banners, PlaystationIcon, XboxIcon } from "./components/Ads";
import {
  RightArrow,
  ShoppingCartIcon,
} from "./components/shared/Icons";
import { useGetProducts } from "../../roupi/product";
import Link from "next/link";
import PCIcon from "./resources/game.png";
import Image from "next/image";
import { Product } from "./components/Product";
import ProductCarousel from"./components/ProductCarousel"


const products = [
  {
    link: "#",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    title: "Premium Watch",
    category: "Accessories",
    price: "$199.99",
  },
  {
    link: "#",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    title: "Wireless Headphones",
    category: "Electronics",
    price: "$149.99",
  },
  {
    link: "#",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    title: "Camera Lens",
    category: "Photography",
    price: "$299.99",
    outOfStock: true,
  },
  {
    link: "#",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    title: "Sunglasses",
    category: "Fashion",
    price: "$89.99",
  },
  {
    link: "#",
    image: "https://images.unsplash.com/photo-1507764923504-cd90bf7da772",
    title: "Smart Watch",
    category: "Electronics",
    price: "$249.99",
  },
  {
    link: "#",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    title: "Running Shoes",
    category: "Sports",
    price: "$129.99",
  },
  {
    link: "#",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    title: "Wireless Earbuds",
    category: "Electronics",
    price: "$159.99",
  },
 
  
];

const Title = ({ text, subtext }: any) => (
  <>
    <p className="text-gray-900 uppercase font-bold text-2xl">{text}</p>
    <p className="text-gray-600 text-sm">{subtext}</p>
  </>
);

const Category = ({ name, slug, children, p = "p-7" }) => (
  <Link href={`/products/${slug}`} className="flex flex-col items-center justify-center">
    <div className={`rounded-full bg-gray-200 hover:shadow-md ${p} max-md:p-4`}>
      {children}
    </div>
    <p className="font-bold text-center mt-2 text-xl max-md:text-lg">{name}</p>
  </Link>
)


export default function Home() {
  const { product: hotDeals } = useGetProducts({ filter: 'super-deals/' })
  console.log(hotDeals)
  return (
    <>
      <main>
        <Banners />
        <section className="flex flex-col items-center my-16 justify-center">
          <Title
            text="Featured Categories"
            subtext="Explore our selected categories."
          />
          <div className="flex mt-4 space-x-20 p-12 max-md:space-x-8">
            <Category name="Xbox" slug="xbox"><XboxIcon /></Category>
            <Category name="Playstation" slug="playstation"><PlaystationIcon /></Category>
            <Category p="p-[20px]" name="PC" slug="pc"><Image src={PCIcon} width={200} height={200} alt="pc-games" className="w-16 h-16 max-md:w-8 max-md:h-8" /></Category>
          </div>
        </section>
        <section className="flex flex-col items-center my-16 justify-center overflow-hidden">
          <Title
            text="New arrival"
            subtext="Check the latest products in our collection."
          />
          <div className="flex max-sm:flex-col overflow-auto py-4   px-24 space-x-8">
            <input type="radio" name="slider" id="slide1" className="hidden peer/slide1" defaultChecked />
            <input type="radio" name="slider" id="slide2" className="hidden peer/slide2" />
            <input type="radio" name="slider" id="slide3" className="hidden peer/slide3" />

            <div className=" w-full  max-sm:w-[300px]   ">
              <ProductCarousel title="" products={products} />
            </div>
              
            <div className="hidden max-sm:flex my-2 gap-x-4 justify-center items-center">
              <label htmlFor="slide1" className="w-4 h-4 rounded-full cursor-pointer transition-all bg-gray-400 peer-checked/slide1:bg-blue-500"></label>
              <label htmlFor="slide2" className="w-4 h-4 rounded-full cursor-pointer transition-all bg-gray-400 peer-checked/slide2:bg-blue-500"></label>
              <label htmlFor="slide3" className="w-4 h-4 rounded-full cursor-pointer transition-all bg-gray-400 peer-checked/slide3:bg-blue-500"></label>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center my-16 justify-center">
          <Title
            text="Featured products"
            subtext="We selected these for you."
          />
          <div className="flex max-sm:flex-col overflow-auto py-4 px-24 space-x-8">
            <input type="radio" name="Fslider" id="Fslide1" className="hidden peer/Fslide1" defaultChecked />
            <input type="radio" name="Fslider" id="Fslide2" className="hidden peer/Fslide2" />
            <input type="radio" name="Fslider" id="Fslide3" className="hidden peer/Fslide3" />

            <div className="max-sm:peer-checked/Fslide1:opacity-100 max-sm:peer-checked/Fslide2:hidden max-sm:peer-checked/Fslide3:hidden">
              <Product category="category" productName="product1" price={200} />
            </div>
            <div className="max-sm:peer-checked/Fslide1:hidden max-sm:peer-checked/Fslide2:opacity-100 max-sm:peer-checked/Fslide3:hidden">
              <Product category="category" productName="product2" price={200} />
            </div>
            <div className="peer-checked/Fslide1:hidden peer-checked/Fslide2:hidden peer-checked/Fslide3:opacity-100">
              <Product category="category" productName="product3" price={200} />
            </div>
            <div className="hidden max-sm:flex my-2 gap-x-4 justify-center items-center">
              <label htmlFor="Fslide1" className="w-4 h-4 rounded-full cursor-pointer transition-all bg-gray-400 peer-checked/Fslide1:bg-blue-500"></label>
              <label htmlFor="Fslide2" className="w-4 h-4 rounded-full cursor-pointer transition-all bg-gray-400 peer-checked/Fslide2:bg-blue-500"></label>
              <label htmlFor="Fslide3" className="w-4 h-4 rounded-full cursor-pointer transition-all bg-gray-400 peer-checked/Fslide3:bg-blue-500"></label>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center my-16 justify-center">
          <Title
            text="Hot deals"
            subtext="Check the latest products in our collection."
          />
          <div className="flex max-sm:flex-col overflow-auto py-4 px-24 space-x-8">
            <input type="radio" name="Hslider" id="Hslide1" className="hidden peer/Hslide1" defaultChecked />
            <input type="radio" name="Hslider" id="Hslide2" className="hidden peer/Hslide2" />
            <input type="radio" name="Hslider" id="Hslide3" className="hidden peer/Hslide3" />

            <div className="max-sm:peer-checked/Hslide1:opacity-100 max-sm:peer-checked/Hslide2:hidden max-sm:peer-checked/Hslide3:hidden">
            <Product category="Electronics" link="" productName="product1" price={200} image="" />
            </div>
            <div className="max-sm:peer-checked/Hslide1:hidden max-sm:peer-checked/Hslide2:opacity-100 max-sm:peer-checked/Hslide3:hidden">
              <Product category="category" productName="product2" price={200} />
            </div>
            <div className="peer-checked/Hslide1:hidden peer-checked/Hslide2:hidden peer-checked/Hslide3:opacity-100">
              <Product category="category" productName="product3" price={200} />
            </div>
            <div className="hidden max-sm:flex my-2 gap-x-4 justify-center items-center">
              <label htmlFor="Hslide1" className="w-4 h-4 rounded-full cursor-pointer transition-all bg-gray-400 peer-checked/Hslide1:bg-blue-500"></label>
              <label htmlFor="Hslide2" className="w-4 h-4 rounded-full cursor-pointer transition-all bg-gray-400 peer-checked/Hslide2:bg-blue-500"></label>
              <label htmlFor="Hslide3" className="w-4 h-4 rounded-full cursor-pointer transition-all bg-gray-400 peer-checked/Hslide3:bg-blue-500"></label>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center my-16 justify-center">
          <Title
            text="Best Sellers"
            subtext="Explore products that our customers loves most."
          />
          <div className="flex max-sm:flex-col overflow-auto py-4 px-24 space-x-8">
            <input type="radio" name="Bslider" id="Bslide1" className="hidden peer/Bslide1" defaultChecked />
            <input type="radio" name="Bslider" id="Bslide2" className="hidden peer/Bslide2" />
            <input type="radio" name="Bslider" id="Bslide3" className="hidden peer/Bslide3" />

            <div className="max-sm:peer-checked/Bslide1:opacity-100 max-sm:peer-checked/Bslide2:hidden max-sm:peer-checked/Bslide3:hidden">
              <Product category="category" productName="product1" price={200} />
            </div>
            <div className="max-sm:peer-checked/Bslide1:hidden max-sm:peer-checked/Bslide2:opacity-100 max-sm:peer-checked/Bslide3:hidden">
              <Product category="category" productName="product2" price={200} />
            </div>
            <div className="peer-checked/Bslide1:hidden peer-checked/Bslide2:hidden peer-checked/Bslide3:opacity-100">
              <Product category="category" productName="product3" price={200} />
            </div>
            <div className="hidden max-sm:flex my-2 gap-x-4 justify-center items-center">
              <label htmlFor="Bslide1" className="w-4 h-4 rounded-full cursor-pointer transition-all bg-gray-400 peer-checked/Bslide1:bg-blue-500"></label>
              <label htmlFor="Bslide2" className="w-4 h-4 rounded-full cursor-pointer transition-all bg-gray-400 peer-checked/Bslide2:bg-blue-500"></label>
              <label htmlFor="Bslide3" className="w-4 h-4 rounded-full cursor-pointer transition-all bg-gray-400 peer-checked/Bslide3:bg-blue-500"></label>
            </div>
          </div>
        </section>
        <section className="flex flex-col px-10 items-center justify-center inset-0 bg-gradient-to-br from-gray-50 to-gray-100 py-24">
          <p className="text-purple-500 font-bold text-lg">Simple Process</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-4">
            Get Started in Minutes
          </h1>
          <p className="text-gray-500 mb-12">
            Follow these simple steps to purchase and receive your digital
            products instantly
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="relative group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCartIcon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Browse &amp; Select
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Explore our wide range of digital products and choose what
                  suits your needs. From gift cards to game credits, we've got
                  you covered.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200">
                <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-600 rounded-full transform -translate-y-1/2"></div>
              </div>
            </div>
            <div className="relative group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-credit-card-icon w-12 h-12 text-purple-600"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Chat With Seller
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Complete your purchase securely using your preferred payment
                  method. We support multiple payment options for your
                  convenience.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200">
                <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-600 rounded-full transform -translate-y-1/2"></div>
              </div>
            </div>
            <div className="relative group h-full">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-download-icon w-12 h-12 text-purple-600"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Instant Delivery
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Receive your digital products instantly after payment. Access
                  your codes immediately in your account dashboard.
                </p>
              </div>
            </div>
          </div>
          <Link href="/products">
      <div className="bg-purple-600 hover:bg-purple-700 group flex items-center justify-center px-4 py-2 text-white rounded-md text-md font-bold cursor-pointer">
        Start Shopping
        <div className="pl-2 transform group-hover:translate-x-1 transition-transform">
          <RightArrow />
        </div>
      </div>
    </Link>
        </section>
      </main>
    </>
  );
}
