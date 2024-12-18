# 📝 주특기주차 개인 프로젝트 - "League Of Legends App"


### 🔗프로젝트 소개
Riot Games의 API와 Data Dragon을 활용하여 LoL 캐릭터, 아이템을 조회하고, 무료로 사용이 가능한 캐릭터를 조회할 수 있습니다.
- - -

### 🕓프로젝트 기간
2024년 12월 9일 ~ 2024년 12월 19일
- - -

### ⚒기술 스택
<div>
<img src="https://img.shields.io/badge/next.js-000000?style=flat-square&logo=next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/reactquery-FF4154?style=flat-square&logo=reactquery&logoColor=white"/>
</div>

- - -

### 📌주요기능
+ 캐릭터 조회
  + 캐릭터 목록을 확인할 수 있습니다.
  + 캐릭터를 누르면 캐릭터의 상세 정보를 확인할 수 있습니다. 
  
+ 아이템 조회
  + 아이템 목록을 확인할 수 있습니다.
  
+ 로테이션 조회
  + 무료로 플레이가 가능한 케릭터 목록을 볼 수 있습니다.
  + 캐릭터를 누르면 캐릭터의 상세 정보를 확인할 수 있습니다.
- - -

### ⚠ 트러블슈팅
@ 블로그 주소
1. https://gksekdud12.tistory.com/46
2. https://gksekdud12.tistory.com/47
3. https://gksekdud12.tistory.com/48
- - -

### 📚 프로젝트 구조
```bash
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂champion-list
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┗ 📜ChampionCard.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂items
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜icon.ico
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂provider
 ┃ ┗ 📜ReactQueryProvider.tsx
 ┣ 📂types
 ┃ ┣ 📜Champion.ts
 ┃ ┣ 📜ChampionRotation.ts
 ┃ ┗ 📜Item.ts
 ┗ 📂utils
 ┃ ┣ 📜riotApi.ts
 ┃ ┗ 📜serverApi.ts
```
