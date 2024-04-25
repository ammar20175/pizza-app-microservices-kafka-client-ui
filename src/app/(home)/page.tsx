import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import ProductList from "./components/product-list";

export default async function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container flex items-center justify-between py-24">
          {/* left part*/}
          <div>
            <h1 className="text-7xl font-black font-sans leading-2">
              Super Delicious Pizza <br />
              <span className="text-primary">Only in $45 Minutes</span>
            </h1>

            <p className="text-2xl mt-8 max-w-lg leading-snug">
              Enjoy a Free Meal if Your Order Takes more than 45 minutes
            </p>

            <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
              Get your pizza now
            </Button>
          </div>
          {/* right part */}
          <div>
            <Image
              alt="pizza-main"
              src={"/pizza-main.png"}
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      <Suspense fallback={"loading......"}>
        <ProductList />
      </Suspense>
    </>
  );
}
