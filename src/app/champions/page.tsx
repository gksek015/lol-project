import { fetchChampionList } from "@/utils/serverApi";
import ChampionCard from "./_components/ChampionCard";

export default async function ChampionPage() {
    const championData = await fetchChampionList();
    const champions = Object.values(championData);

    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center pt-20 px-6">
        <h2 className="text-3xl font-bold pb-10">
          챔피언 목록
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-7xl">
          {champions.map((champion) => (
            <ChampionCard champion={champion} key={champion.id} />
          ))}
        </div>
      </div>
    );
}