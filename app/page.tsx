import { MainBackground } from "./resources/background";
import { List } from "./resources/list";
import { Suspense } from "react";

export default function Home() {
  return (

    <div className="flex min-h-screen items-center justify-center">
      <main className="flex relative z-0 min-h-160 w-3/4 flex-col items-center py-16 px-16 rounded-xl bg-(--color-dark) gap-6 mt-40 mb-40">
        <MainBackground />
        <h1 className="text-3xl font-bold">Our Collection</h1>
        <h2 className="text-gray-400 max-w-1/2 text-center lg:max-w-1/2 md:max-w-3/4 sm:max-w-full">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</h2>
        <div className=" flex justify-between md:w-1/2 xs:w-full gap-5">
          <h2 className="bg-gray-400 py-1 px-3 rounded-xl text-nowrap">All Products</h2>
          <h2 className="p-1 text-nowrap">Available Now</h2>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <List />
        </Suspense>
      </main>
    </div>
  );
}
