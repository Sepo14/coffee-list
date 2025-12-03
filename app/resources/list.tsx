import { getCoffeesData } from "./fetch"
import Image from "next/image";

export async function List() {
    const coffees = await getCoffeesData();
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 w-full">
            {
                coffees.map((coffee: any) => (
                    <div key={coffee.id} className="flex flex-col items-center p-4">
                        <div className="relative">
                            {coffee.popular == true ? (
                                <div className="absolute top-2 left-2 bg-yellow-500 text-(--color-dark) px-3 py-1 text-sm font-bold rounded-full z-10">
                                    Popular
                                </div>
                            ) : null}
                            <Image
                                src={coffee.image}
                                className="rounded-xl"
                                alt={"coffee"}
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="flex w-full justify-between mt-4">
                            <h3 className="font-bold">{coffee.name}</h3>
                            <h3 className="bg-green-200 rounded-sm p-1 font-bold text-sm text-(--color-dark)">{coffee.price}</h3>
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="flex w-full items-center justify-start mt-2 gap-x-1">
                                {coffee.rating >= 4 ? <Image src="/Star_fill.svg" alt="star" width={24} height={24} /> : <Image src="/Star.svg" alt="star" width={24} height={24} />}
                                <p className="font-bold">{Number(coffee.rating).toFixed(1)}</p>
                                {coffee.rating != null ? <p className="font-bold text-gray-400 text-nowrap">({coffee.votes} votes)</p> : <p className="font-bold text-gray-400 text-nowrap">No ratings</p>}
                            </div>
                            <div className="flex w-full flex-col items-end justify-end">
                                {coffee.available == false ? <p className="text-red-400 font-bold mt-2">Out of Stock</p> : null}
                            </div>
                        </div>


                    </div>
                ))
            }
        </div>
    )
}