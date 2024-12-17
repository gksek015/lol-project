import { ChampionDetail } from "@/types/Champion";
import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";

interface DetailProps {
  params: {
    id: string;
  };
}

export default async function DetailPage({ params }: DetailProps) {
  const champion: ChampionDetail = await fetchChampionDetail(params.id);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-20 px-6">
      <h1 className="text-4xl font-bold mb-10 text-center drop-shadow-lg">
        {champion.name}
      </h1>

      <div className="p-8 max-w-4xl w-full flex flex-col items-center">
        <div className="mb-6">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champion.id}.png`}
            alt={champion.name}
            width={200}
            height={200}
            className="rounded-lg shadow-md transition-transform transform hover:scale-105"
          />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">{champion.name}</h2>
          <p className="text-gray-400 text-sm mb-6">{champion.title}</p>
          <p className="text-gray-300 leading-relaxed">{champion.blurb}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {champion.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
