import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

interface Props {
    champion: Champion;
}

export default function ChampionCard({champion}: Props) {
    return (
        <Link href={`/champions/${champion.id}`}>
          <div className="bg-gray-800 hover:bg-gray-700 text-white p-5 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champion.id}.png`}
              alt={champion.name}
              width={60}
              height={60}
            />
            <h3 className="text-lg font-semibold mt-4">{champion.name}</h3>
            <h3 className="text-sm text-gray-400">{champion.title}</h3>
          </div>
        </Link>
      );
}