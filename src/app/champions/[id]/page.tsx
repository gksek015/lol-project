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
    <div className="pt-20 flex justify-center align-center flex-col items-center">
      <h1 className="pb-10 text-xl font-bold justify-center align-center flex">
        {champion.name}
      </h1>
      <div className="p-4 rounded justify-center align-center flex flex-col items-center gap-5">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champion.id}.png`}
          alt={champion.name}
          width={200}
          height={200}
        />
        <h3 className="text-center">{champion.name}</h3>
        <h3 className="text-center">{champion.title}</h3>
        <h3 className="text-center">{champion.blurb}</h3>
      </div>
    </div>
  );
}
