import { Item } from "@/types/Item";
import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";

export default async function page() {
    const data = await fetchItemList();
    const items = Object.values(data);
    const uniqueItems = Array.from(new Map(items.map((item) => [item.name, item])).values());

    return (
        <div className="pt-20 flex justify-center align-center flex-col items-center">
            <h2 className="pb-10 text-xl font-bold">아이템 목록</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 w-full max-w-7xl">
                {uniqueItems.map((item: Item) => {
                    return (
                        <div key={item.name} className="bg-white shadow p-4 rounded justify-center align-center flex flex-col items-center gap-5">
                            <Image
                            src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${item.image.full}`}
                            alt={item.name}
                            width={60}
                            height={60}
                            />
                            <h2>{item.name}</h2>
                            <p>{item.plaintext}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}