"use client";

import { useGetProducts } from "../../../../roupi/product";
import { useGetcategories } from "../../../../roupi/categories";
import Link from "next/link";
import Image from "next/image";



const Banner = ({ text, subtext }: any) => (
  <>
    <p className="text-gray-900 uppercase font-bold text-2xl">{text}</p>
    <p className="text-gray-600 text-sm">{subtext}</p>
  </>
);

const Category = ({ name, slug }) => (<Link href={`/products/${slug}`}>{name}</Link>)

const Title = ({ icon, name }) => (
  <div className="flex gap-2 items-center justify-start my-2">
    <span className="emoji">{icon}</span>
    <h3 className="font-bold text-xl">{name}</h3>
  </div>
)

const PriceFilter = () => {
  return (
    <div className="p-2">
      <Title icon="💰" name="Price Range (DZD)" />
      <div className="flex py-2 items-center justify-center gap-2">
        <div className="flex items-center px-2 justify-center border rounded-md">
          <span className="text-gray-400 pr-2">DZD</span>
          <input type="number" className="py-2 focus:outline-none focus:ring-0 w-full" placeholder="Min" />
        </div>
        <span className="text-xl font-bold text-gray-400">-</span>
        <div className="flex items-center px-2 justify-center border rounded-md">
          <span className="text-gray-400 pr-2">DZD</span>
          <input type="number" className="py-2 focus:outline-none focus:ring-0 w-full" placeholder="Max" />
        </div>
      </div>
    </div>
  )
}

const Categories = () => {
  const { categories } = useGetcategories()
  const parent = categories.filter(({ parent_id }) => !parent_id)
  return (
    <>
      <Title icon="📂" name="Categories" />
      <div className="mx-8 my-4 space-y-2">
        {parent.map(({ parent_id, name, id }) => <p className="text-gray-700 cursor-pointer w-full hover:bg-gray-200 px-2 py-1 rounded-md font-semibold">{name}</p>)}

      </div>
    </>
  )

}


export default function Home() {
  const { product: hotDeals } = useGetProducts({ filter: 'super-deals/' })
  console.log(hotDeals)
  return (
    <div className="max-w-[1800px] gap-24 px-8 flex flex-col my-16 items-center justify-center">
      <div className="bg-purple-600 max-w-[1200px] rounded-xl w-full py-4"></div>
      <div className="flex items-center max-w-[1200px] justify-start w-full">
        <div className="w-[400px]">
          <div className="rounded-t-md border px-4 py-5 shadow-md">
            <p className="text-xl font-bold">Filter Products</p>
          </div>
          <div className="border px-2">

            <PriceFilter />
            <div className="w-full bg-gray-300 py-[0.5px]"></div>
            <Categories />
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
}
