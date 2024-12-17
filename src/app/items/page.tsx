import { Item } from "@/types/Item";
import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";

export default async function page() {
  const data = await fetchItemList();
  const items = Object.values(data);
  const uniqueItems = Array.from(
    new Map(items.map((item) => [item.name, item])).values()
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">아이템 목록</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {uniqueItems.map((item: Item) => (
          <div
            key={item.name}
            className="bg-gray-800 hover:bg-gray-700 p-5 rounded-lg shadow-lg flex flex-col items-center gap-4 transition-transform transform hover:scale-105"
          >

            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${item.image.full}`}
              alt={item.name}
              width={60}
              height={60}
              className="rounded-md border border-gray-600"
            />

            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-400 text-sm text-center">
              {item.plaintext || "설명 없음"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
