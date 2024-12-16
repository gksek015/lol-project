// 챔피언 기본 정보 타입 (Champion)
export interface Champion {
  key: string;
  id: string; // 챔피언의 고유 ID
  name: string; // 챔피언 이름
  title: string; // 챔피언 타이틀
  image: ChampionImage; // 챔피언 이미지 정보
  tags: string[]; // 챔피언 태그 (e.g., Fighter, Mage)
}

// 챔피언 상세 정보 타입 (ChampionDetail)
export interface ChampionDetail extends Champion {
  version: string; // 데이터 버전
  key: string; // 챔피언 키 (숫자로 된 문자열)
  blurb: string; // 챔피언 설명
  info: ChampionInfo; // 챔피언 능력치 요약
  partype: string; // 리소스 유형 (e.g., Blood Well)
  stats: ChampionStats; // 챔피언 상세 스탯
}

// 챔피언 이미지 타입
export interface ChampionImage {
  full: string; // 이미지 파일 이름
  sprite: string; // 스프라이트 이미지 파일
  group: string; // 이미지 그룹 (e.g., champion)
  x: number; // 스프라이트 내 x좌표
  y: number; // 스프라이트 내 y좌표
  w: number; // 스프라이트 내 너비
  h: number; // 스프라이트 내 높이
}

// 챔피언 능력치 요약 타입
export interface ChampionInfo {
  attack: number; // 공격력
  defense: number; // 방어력
  magic: number; // 마법 능력
  difficulty: number; // 난이도
}

// 챔피언 상세 스탯 타입
export interface ChampionStats {
  hp: number; // 기본 체력
  hpperlevel: number; // 레벨당 체력 증가량
  mp: number; // 기본 마나
  mpperlevel: number; // 레벨당 마나 증가량
  movespeed: number; // 이동 속도
  armor: number; // 기본 방어력
  armorperlevel: number; // 레벨당 방어력 증가량
  spellblock: number; // 마법 저항력
  spellblockperlevel: number; // 레벨당 마법 저항력 증가량
  attackrange: number; // 공격 범위
  hpregen: number; // 기본 체력 재생량
  hpregenperlevel: number; // 레벨당 체력 재생 증가량
  mpregen: number; // 기본 마나 재생량
  mpregenperlevel: number; // 레벨당 마나 재생 증가량
  crit: number; // 기본 치명타 확률
  critperlevel: number; // 레벨당 치명타 확률 증가량
  attackdamage: number; // 기본 공격력
  attackdamageperlevel: number; // 레벨당 공격력 증가량
  attackspeedperlevel: number; // 레벨당 공격 속도 증가량
  attackspeed: number; // 기본 공격 속도
}

export type ChampionDetailResponse = {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: ChampionDetail;
  };
};