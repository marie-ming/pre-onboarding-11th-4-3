# 한국임상정보 검색창 클론코딩
  Team3 - 정민지


<br/>

## 🗓️ 기간

- 2023년 7월 16일 ~ 2023년 07월 19일

## 🧭 목표

- 검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현
- [한국임상정보](https://clinicaltrialskorea.com/)의 검생창을 [assignment-api](https://github.com/walking-sunset/assignment-api)로 구현하기

<br/>

## ✅ Task

### ❗ 요구사항

1. 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

   - 검색어가 없을 시 “검색어 없음” 표출

2. API 호출별로 로컬 캐싱 구현

   - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
   - expire time 구현

3. 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
4. API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
5. 키보드만으로 추천 검색어들로 이동 가능하도록 구현

<br/>

## 🛠️ Stacks

![react](https://user-images.githubusercontent.com/123078739/234895132-18ab503a-fcc7-486d-b89a-cb0cc1f7796b.svg) ![eslint](https://user-images.githubusercontent.com/123078739/234895191-c1198a7b-9e2e-499a-8e61-c3b87bf8e2c2.svg)
![prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black) ![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) ![typescript](https://user-images.githubusercontent.com/123078739/234895162-42f905c6-765d-44d2-bcb1-b011286ef6b2.svg) ![styledcomponents](https://user-images.githubusercontent.com/123078739/234895185-7fd6c334-faca-4520-8551-2f20b32f085e.svg)

<br/>

### 📍 기능

![ezgif com-video-to-gif](https://github.com/wanted-pre-onboarding-11th-team3/pre-onboarding-11th-3-3/assets/44185091/45248bc1-4fda-4611-8876-d9c8ef12caad)

<br/>

### 🌳 File Tree

```
📦src
┣ 📂apis
┃ ┣ 📜index.ts
┃ ┗ 📜sick.ts
┣ 📂assets
┃ ┣ 📜CloseIcon.svg
┃ ┗ 📜SearchIcon.svg
┣ 📂components
┃ ┣ 📂search
┃ ┃ ┣ 📜SearchInputBar.tsx
┃ ┃ ┣ 📜SearchItem.tsx
┃ ┃ ┣ 📜SearchRecent.tsx
┃ ┃ ┗ 📜SearchRecommend.tsx
┃ ┗ 📜SearchSection.tsx
┣ 📂constants
┃ ┣ 📜api.ts
┃ ┗ 📜cache.ts
┣ 📂hooks
┃ ┣ 📜useCache.ts
┃ ┣ 📜useDebounce.ts
┃ ┣ 📜useKeyFocus.ts
┃ ┗ 📜useSickData.ts
┣ 📂interfaces
┃ ┗ 📜sick.ts
┣ 📜App.tsx
┣ 📜GlobalStyle.ts
┣ 📜index.tsx
┗ 📜react-app-env.d.ts

```

## ✨ 구현 내용

### 📌 API 호출별로 로컬 캐싱 구현 `useCache`
- 상태에 `key` input으로 입력 받은 값, `value` 추천 검색어들, `expireTime` 만료 시간을 객체의 배열로 저장하도록 하였습니다.
- input에 값이 입력되면 `key`가 존재하는지와 만료 시간 확인 후 조건에 맞으면 저장된 값들을 불러오고 그렇지 않으면 api를 호출합니다.
- api가 호출되면  `key` `value` `expireTime` 가 저장됩니다.



### 📌 API 호출 횟수를 줄이는 기능 구현 `useDebounce`
  - 사용자가 입력을 마친 뒤 지정된 시간 이후 API 호출이 이루어지도록 Debounce를 사용하여 구현하였습니다.

### 📌 키보드만으로 추천 검색어들로 이동 기능 구현 `useKeyFocus`
- 키보드 이벤트를 받아 `ArrowUp`, `ArrowDown`, `Enter` 키가 각각 다른 동작을 수행하도록 하였습니다.
- 방향키 `ArrowUp` 일 때는 index 를 1씩 감소시키고, 방향키 `ArrowDown` 일 때는 index 를 1씩 증가시켜 `focusedIndex`의 상태로 관리됩니다.
- `Enter` 키를 입력했을 경우 해당 index의 text를 input에 반영되도록 구현하였습니다.

