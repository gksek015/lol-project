import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

interface Props {
    champion: Champion;
}

export default function ChampionCard({champion}: Props) {
    return (
        <Link href={`/champions/${champion.id}`}>
          <div className="bg-white shadow p-4 rounded justify-center align-center flex flex-col items-center gap-5">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champion.id}.png`}
              alt={champion.name}
              width={60}
              height={60}
            />
            <h3 className="text-center">{champion.name}</h3>
            <h3 className="text-center">{champion.title}</h3>
          </div>
        </Link>
      );
}