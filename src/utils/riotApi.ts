import { ChampionRotation } from "@/types/ChampionRotation";

const RIOT_API = "https://kr.api.riotgames.com";
const RIOT_API_KEY = process.env.RIOT_API_KEY;

export async function getChampionRotation(): Promise<ChampionRotation> {
    if(!RIOT_API_KEY) {
        throw new Error("API KEY 오류")
    }

    const res = await fetch(`${RIOT_API}/lol/platform/v3/champion-rotations`, {
        headers: {
            'X-Riot-Token' : RIOT_API_KEY,
        }
    })

    if(!res.ok) {
        throw new Error("로드실패")
    }

    return res.json();
}