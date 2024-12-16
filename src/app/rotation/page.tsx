"use client";

import { Champion } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const fetchRotationData = async () => {
  try {
    const res = await fetch("/api/rotation");
    if (!res.ok) {
      throw new Error("로테이션 요청에 실패했습니다.");
    }
    const data: ChampionRotation = await res.json();

    const championRes = await fetch("/api/champion-list");
    if (!championRes.ok) {
      throw new Error("챔피언 데이터를 가져오는 데 실패했습니다.");
    }
    const allChampions = await championRes.json();

    const freeChampions = data.freeChampionIds
      .map((id: number) => {
        const champList: Champion[] = Object.values(allChampions);

        const champ = champList.find(
          (champion) => parseInt(champion.key) === id
        );

        if (!champ) {
          throw new Error(`챔피언 ID(${id})에 대한 데이터를 찾을 수 없습니다.`);
        }

        return {
          id: champ.id,
          name: champ.name,
          title: champ.title,
          image: champ.image.full,
        };
      })
      .filter((champion) => champion !== null);

    return freeChampions;
  } catch (error: any) {
    console.error("Error fetching rotation data");
    throw new Error(error.message);
  }
};

export default function Page() {
  const {
    data: champions = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["championRotation"],
    queryFn: fetchRotationData,
    staleTime: 3000,
    gcTime: 3000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (!champions) return <p>데이터가 없습니다.</p>;

  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Free Champion Rotation
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {champions.map((champion) => (
          <Link href={`/champions/${champion.id}`} key={champion.id}>
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
        ))}
      </div>
    </div>
  );
}
