# 💰한푼두푼(HPDP) 💰

프로젝트 기간: 2023.08.21 ~ 2023.10.06

---

## 서비스 소개

---

**소셜 벤처에 후원해주세요!** ❤ **[UCC보러가기](https://youtu.be/pNRrlDQ1Il0)** ❤

한푼두푼(HPDP)은 크라우드 펀딩을 활용한 소셜 벤처 자금 후원 서비스 플랫폼입니다.

일상에서 발생하는 끝전으로 당신이 관심을 가지는 기업과 프로젝트에 후원하세요.

<!-- ![home](README_assets/a3259c9fbac9f9cfbe70287ea989edc5c956b44a.png) -->
<img src="./ReadmeAssets/홈.gif" alt="GIF 이미지" width="300">

## 서비스 특징

---

1. 계좌에서 발생하는 1,000원 미만 끝전이 매일 오후 10시에 자동으로 이체되어 포인트로 누적됩니다.

2. 누적된 포인트로 관심 있는 프로젝트를 후원합니다.

3. 가격 변동 위험 없는 자체 블록체인 토큰으로 후원 금액이 소셜 벤처에 전달되는 과정을 투명하게 관리합니다.

## 주요 기능

---

#### 끝전 자동이체

- 자체 뱅킹 서비스를 구현하여 매일 오후 10시 끝전 자동이체 기능을 제공합니다.

- 끝전을 부담 없이 후원할 수 포인트를 모을 수 있도록 사용자의 참여를 유도합니다.

#### 스마트 컨트랙트와 블록체인을 이용한 한푼두푼 코인

- 스마트 컨트랙트를 이용하여 크라우드 펀딩 로직을 구현했습니다.

- 프라이빗 네트워크를 구축하고 자체 토큰을 발행하여 원화와 토큰의 환율이 1:1로 고정되어 가격 변동 위험을 제거했습니다.

#### OpenAI API를 활용한 기업 정보 제공

- OpenAI(ChatGPT) API를 활용해 소셜 벤처에 대한 요약 정보를 제공합니다.

- 후원 주체는 대상 기업의 정보를 확인하고 소셜 벤처는 홍보 효과를 얻을 수 있습니다.

## 기능별 화면

### 계좌 등록

<img src="./ReadmeAssets/계좌 등록.gif" alt="GIF 이미지" width="300">

### 끝전 이체

<img src="./ReadmeAssets/끝전 알림.gif" alt="GIF 이미지" width="300">

<!-- ### 토스

<img src="./ReadmeAssets/토스.gif" alt="GIF 이미지" width="300"> -->

### 알림 확인

<img src="./ReadmeAssets/알림 확인.gif" alt="GIF 이미지" width="300">

### 후원 목록

<img src="./ReadmeAssets/후원리스트.gif" alt="GIF 이미지" width="300">

### 후원 진행

<img src="./ReadmeAssets/후원하기.gif" alt="GIF 이미지" width="300">

### 후원 내역

<img src="./ReadmeAssets/후원내역 확인.gif" alt="GIF 이미지" width="300">

### 기업 목록

<img src="./ReadmeAssets/기업 리스트 조회.gif" alt="GIF 이미지" width="300">

### 관심 기업

<img src="./ReadmeAssets/관심기업.gif" alt="GIF 이미지" width="300">

### 쪽지 작성

<img src="./ReadmeAssets/기업 쪽지 보내기.gif" alt="GIF 이미지" width="300">

### 블록체인 정보

<img src="./ReadmeAssets/블록체인 확인.gif" alt="GIF 이미지" width="300">

### 기업 정산

<img src="./ReadmeAssets/기업 정산.gif" alt="GIF 이미지" width="300">

---

## 사용한 외부 서비스

---

- OpenAI(ChatGPT) API

- Web3 API

## 시스템 아키텍쳐

---

<!-- ![Architecture](README_assets/c7ce3cfa4da0cea82de18fa00017ff61f2ec5945.png) -->
<img src="./README_assets/c7ce3cfa4da0cea82de18fa00017ff61f2ec5945.png" alt="Architecture" width="800">

## ERD 다이어그램

---

<!-- ![ERD](README_assets/e47495e7471ddf38aec7f0152037683f68f513c0.png) -->
<img src="./README_assets/e47495e7471ddf38aec7f0152037683f68f513c0.png" alt="ERD" width="800">

## 문서 링크

---

- [팀 노션]([Notion – The all-in-one workspace for your notes, tasks, wikis, and databases.](https://nonstop-basil-8e5.notion.site/fintech-d8bbd29d3ca24a36aef3a09bdabd5e28))

- [API 명세서](https://nonstop-basil-8e5.notion.site/API-dc66a4b230534c7c8091f42aa53ec28f)

- [기능 명세서](https://nonstop-basil-8e5.notion.site/986107c1b0e146edaa73ebf37f1298be)

## Git-flow

---

- 기능 개발이 완료되면 feature branch를 develop branch로 merge한다.

- branch 규칙

> master : 서버를 배포하는 branch
>
> develop : 기능을 개발하는 branch
>
> feature : 세부 기능을 개발하는 branch

- feature branch 이름 규칙

> feature/[BC/BE/FE]/[기능]
>
> ex) feature/BC/private-network
>
> BC: blockchain
>
> BE: backend
>
> FE: frontend


## commit conventions

```javascript
[타입] 작업 내용(최대한 자세히) ex)[INIT] 초기화
- INIT: 초기화
- FEAT: 신규 기능 추가
- MODIFY: 기존 코드 수정
- DESIGN or STYLE: 코드 순서, CSS 등 개발된 기능에 영향을 미치지 않는 코드
- FIX: 버그 수정
- REFACTOR: 프로덕션 코드 리팩토링
- TEST: 테스트 코드 작성
- DOCS: readme, log 등 main 문서 수정
- REVIEW: 코드 리뷰 반영
- BUILD: 빌드
- BACKUP: 백업
- COMMENT : 주석 추가, 수정, 삭제
- FILE: 파일 추가, 수정, 삭제
- MERGE: 병합
- CHORE: 기타
```

## JIRA 규칙

---

```javascript
기준

- epic : 스토리들의 집합체, 스프린트가 필요한 작업 내용을 정의
    - 회원 관리
- story : 에픽의 Use Case, 사용자가 수행하는 행동과 목표 위주 기술
    - 회원 가입, 로그인
- task : 스토리에서 기술한 내용을 달성하기 위해 수행해야할 기술적인 업무
    - 회원 가입, 아이디 중복체크

[날짜] 이름

- 이슈 연결하기
- 컴포넌트 선택 [ BE | FE ]
```

## 폴더 구조

---

```
frontend
  ├── docker
  ├── assets
  ├── node_modules
  ├── public
  └── src
      ├── api
      ├── components
      ├── interface
      ├── pages
      ├── store
      ├── style
      │   ├─ css
      │   ├─ fonts
      │   └─ scss
      └── types
```

```
backend
└─ main
  ├─ config
  ├─ controller
  │  └─ member
  │     ├─ request
  │     |    └─ MemberReq
  |     └─ response
  │          └─ MemberRes
  ├─ service
  │  └─ member
  │     └─ MemberService
  │     └─ MemberQueryService
  │        # @ReadOnly 조회때 사용
  ├─ common # dao
  │  ├─ auth
  │  ├─ exception
  │  └─ util
  └─ model
     ├─ entity
     |  └─ Member
     └─ repository
        ├─ MemberRepository
        └─ MemberQueryRepository
```

