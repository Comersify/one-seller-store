"use client";
import { Banner, ProductCard } from "../../comps";
import { useProducts } from "../../roupi/product";

export default function Home() {
  const { products } = useProducts({});
  return (
    <main>
      <Banner />
      <section className="flex flex-wrap my-24 gap-4 items-center justify-center">
        {products?.map((product) => (
          <ProductCard
            key={0}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            discount={product.discount_value}
          />
        ))}
      </section>
    </main>
  );
}
