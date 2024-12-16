"use server"

import { Champion, ChampionDetail, ChampionDetailResponse } from "@/types/Champion";
import { Item } from "@/types/Item";

const Base_URL = "https://ddragon.leagueoflegends.com";

// 버전 정보
export async function fetchVersions(): Promise<string[]> {
    const res = await fetch(`${Base_URL}/api/versions.json`);
    if(!res.ok) {
        throw new Error("버전 에러")
    }
    return res.json();
}

// 챔피언 목록
export async function fetchChampionList(): Promise<{[key: string]: Champion}> {
    const version = await fetchVersions();
    const latestVersion = version[0];

    const res = await fetch(`${Base_URL}/cdn/${latestVersion}/data/ko_KR/champion.json`,
        {
            next: {
                revalidate: 86400,
            },
        }
    );

    if(!res.ok) {
        throw new Error("챔피언 리스트를 가져오는 데 실패했습니다.")
    }

    const data = await res.json();
    return data.data;
}

// 챔피언 상세정보
export async function fetchChampionDetail(id: string): Promise<ChampionDetail> {
    const version = await fetchVersions();
    const latestVersion = version[0];

    const res = await fetch(`${Base_URL}/cdn/${latestVersion}/data/ko_KR/champion/${id}.json`,
        {cache: 'no-store'}
    );

    if (!res.ok) {
        throw new Error("챔피언 정보를 가져오는 데 실패했습니다.")
    }

    const data: ChampionDetailResponse = await res.json();
    const detail = data.data[id];
    return detail;
}

// 아이템 리스트
export async function fetchItemList(): Promise<Item[]> {
    const version = await fetchVersions();
    const latestVersion = version[0];

    const res = await fetch(`${Base_URL}/cdn/${latestVersion}/data/ko_KR/item.json`);
    if(!res.ok) {
        throw new Error("아이템 리스트를 가져오는 데 실패했습니다.")
    }

    const data = await res.json();
    return data.data;
}