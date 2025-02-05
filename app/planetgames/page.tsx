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


const Title = ({ text, subtext }: any) => (
  <>
    <p className="text-gray-900 uppercase font-bold text-2xl">{text}</p>
    <p className="text-gray-600 text-sm">{subtext}</p>
  </>
);

const Category = ({ name, slug, children, p = "p-7" }) => (
  <Link href={`/products/${slug}`}>
    <div className={`rounded-full bg-gray-200 hover:shadow-md ${p}`}>
      {children}
    </div>
    <p className="font-bold text-center mt-2 text-xl">{name}</p>
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
          <div className="flex mt-4 space-x-20 p-12">

            <Category name="Xbox" slug="xbox"><XboxIcon /></Category>
            <Category name="Playstation" slug="playstation"><PlaystationIcon /></Category>
            <Category p="p-[20px]" name="PC" slug="pc"><Image src={PCIcon} width={200} height={200} alt="pc-games" className="w-16 h-16" /></Category>
          </div>
        </section>
        <section className="flex flex-col items-center my-16 justify-center">
          <Title
            text="New arrival"
            subtext="Check the latest products in our collection."
          />
          <div className="flex overflow-auto py-4 px-24 space-x-8">
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
          </div>
        </section>
        <section className="flex flex-col items-center my-16 justify-center">
          <Title
            text="Featured products"
            subtext="We selected these for you."
          />
          <div className="flex overflow-auto py-4 px-24 space-x-8">
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
          </div>
        </section>
        <section className="flex flex-col items-center my-16 justify-center">
          <Title
            text="Hot deals"
            subtext="Check the latest products in our collection."
          />
          <div className="flex overflow-auto py-4 px-24 space-x-8">
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
          </div>
        </section>
        <section className="flex flex-col items-center my-16 justify-center">
          <Title
            text="Best Sellers"
            subtext="Explore products that our customers loves most."
          />
          <div className="flex overflow-auto py-4 px-24 space-x-8">
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center inset-0 bg-gradient-to-br from-gray-50 to-gray-100 py-24">
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
          <a
            href="/products"
            className="bg-purple-600 hover:bg-purple-700 group flex items-center justify-center px-4 py-2 text-white rounded-md text-md font-bold"
          >
            Start Shopping{" "}
            <div className="pl-2 transform group-hover:translate-x-1 transition-transform">
              <RightArrow />
            </div>
          </a>
        </section>
      </main>
    </>
  );
}
