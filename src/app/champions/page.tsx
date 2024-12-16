import { fetchChampionList } from "@/utils/serverApi";
import ChampionCard from "./_components/ChampionCard";

export default async function ChampionPage() {
    const championData = await fetchChampionList();
    const champions = Object.values(championData);

    return (
        <div className="pt-20 flex justify-center align-center flex-col items-center">
      <h2 className="pb-10 text-xl font-bold justify-center align-center flex">
        챔피언 목록
      </h2>
      <div className="grid grid-cols-4 gap-10">
        {champions.map((champion) => {
          return <ChampionCard champion={champion} key={champion.id} />;
        })}
      </div>
    </div>
    )
}