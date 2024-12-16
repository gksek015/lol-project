// 신규 플레이어용 챔피언 로테이션 타입
export interface ChampionRotation {
    maxNewPlayerLevel: number;
    freeChampionIdsForNewPlayers: number[];
    freeChampionIds: number[];
  }