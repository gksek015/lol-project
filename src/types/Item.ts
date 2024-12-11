// 아이템 이미지 정보 타입
export interface ItemImage {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  }
  
  // 골드 정보 타입
  export interface ItemGold {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  }
  
  // 맵 정보 타입
  export interface ItemMaps {
    [mapId: string]: boolean; // 예: "11", "12" 등 동적으로 키를 정의
  }
  
  // 아이템 스탯 정보 타입
  export interface ItemStats {
    FlatMovementSpeedMod?: number;
  }
  
  // 아이템 전체 타입
  export interface Item {
    name: string;
    description: string;
    colloq: string;
    plaintext: string;
    into?: string[]; // 다른 아이템으로 업그레이드 가능한 아이템 ID 배열 (선택적 필드)
    image: ItemImage;
    gold: ItemGold;
    tags: string[];
    maps: ItemMaps;
    stats: ItemStats;
  }
  