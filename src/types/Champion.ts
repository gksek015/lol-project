// 기본 정보 타입
export interface ChampionInfo {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  }
  
  // 이미지 정보 타입
  export interface ChampionImage {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  }
  
  // 스탯 정보 타입
  export interface ChampionStats {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  }
  
  // 챔피언 전체 타입
  export interface Champion {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: ChampionInfo;
    image: ChampionImage;
    tags: string[];
    partype: string;
    stats: ChampionStats;
  }