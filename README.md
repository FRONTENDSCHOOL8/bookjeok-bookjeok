# '북적북적'

> 북클럽 서비스 '북적북적'은 독서를 통해 세상과 소통할 수 있는 책 기반 소셜링 플랫폼입니다.

#### https://bookjeok-bookjeok.vercel.app

계정 : `wat@ch.me` / `qwert123!`

### 팀 소개

#### 구황작물

> 서로의 코드를 이해하고 모두가 함께 성장하는 프로젝트!

### 담당 페이지

#### 수양 [clapsheep](https://github.com/clapsheep)

- 팀장 / 스크럼마스터 / 라우팅 셋팅, 인트로, 에러, 모임 (메인, 상세, 생성, 관리) 채팅 페이지 구현

#### 현지 [jio-ping](https://github.com/jio-ping)

- 문서화 / 노션정리 / 회원가입, 로그인, 나의 모임, 모임 참여, 독후감 상세, 독후감 생성, 마이페이지, 프로필 수정 페이지 구현

#### 유나 [cho](https://github.com/cho-yn)

- 리드미 / 아토믹 컴포넌트, 독후감 목록

### 프로젝트 일정

<details>
<summary>일정</summary>
![일정](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/80962702-f2d4-4aa7-bc7d-66330fb03716)
</details>

### 기술 스택

![react](https://img.shields.io/badge/react-lightslategray?style=for-the-badge&logo=react)
![TanStackQuery](https://img.shields.io/badge/TanStack_Query-lightslategray?style=for-the-badge&logo=TanStackQuery)
![Zustand](https://img.shields.io/badge/Zustand-lightslategray?style=for-the-badge&logo=Zustand)
![router](https://img.shields.io/badge/react_router-lightslategray?style=for-the-badge&logo=react-router)
![vite](https://img.shields.io/badge/vite-lightslategray?style=for-the-badge&logo=vite)
![PocketBase](https://img.shields.io/badge/Pocket_Base-lightslategray?style=for-the-badge&logo=PocketBase)
![vercel](https://img.shields.io/badge/vercel-lightslategray?style=for-the-badge&logo=vercel)
![git](https://img.shields.io/badge/git-lightslategray?style=for-the-badge&logo=git)
![github](https://img.shields.io/badge/github-lightslategray?style=for-the-badge&logo=github)
![javascript](https://img.shields.io/badge/javascript-lightslategray?style=for-the-badge&logo=javascript)
![prop_types](https://img.shields.io/badge/prop_types-lightslategray?style=for-the-badge&logoColor=&label=&labelColor=slategray)
![tailwindcss](https://img.shields.io/badge/tailwind_css-lightslategray?style=for-the-badge&logo=tailwindcss)
![figma](https://img.shields.io/badge/figma-lightslategray?style=for-the-badge&logo=figma)
![notion](https://img.shields.io/badge/notion-lightslategray?style=for-the-badge&logo=notion)

### 화면 구성

<details>
<summary>폴더 구조</summary>

```
├─public
│  └─icons
└─src
    ├─api
    ├─assets
    │  └─icons
    ├─client
    ├─components
    │  ├─Atoms
    │  │  ├─Accordion
    │  │  ├─Badge
    │  │  ├─BlankContents
    │  │  ├─Buttons
    │  │  │  ├─MainButton
    │  │  │  ├─OutlineButton
    │  │  │  └─SmallButton
    │  │  ├─GenreButton
    │  │  ├─Inputs
    │  │  │  ├─ChatTextarea
    │  │  │  ├─CheckboxForm
    │  │  │  ├─ImageForm
    │  │  │  ├─RadioForm
    │  │  │  ├─Textarea
    │  │  │  ├─TextForm
    │  │  │  └─ThinTextForm
    │  │  ├─LikeButton
    │  │  ├─MessageBubble
    │  │  ├─NomalTitle
    │  │  ├─RoundImage
    │  │  ├─Svg
    │  │  └─TextBox
    │  ├─Common
    │  │  ├─Loading
    │  │  ├─ProtectRoute
    │  │  └─RootLayout
    │  └─Molecules
    │      ├─ApplicantList
    │      ├─Avatar
    │      ├─BookReviewList
    │      ├─ChatRoomList
    │      ├─ClubCard
    │      ├─ClubList
    │      ├─ConfirmUserList
    │      ├─FilterList
    │      ├─GNB
    │      ├─MainKindToggle
    │      └─Modal
    │          ├─ButtonModalForManageMent
    │          └─DobbleButtonModal
    ├─hooks
    ├─pages
    │  ├─ApplicationClub
    │  │  ├─ApplicationClub1
    │  │  └─ApplicationClub2
    │  ├─Chatting
    │  │  ├─ChatRoom
    │  │  └─ChatRoomListPage
    │  ├─CreateBookReview
    │  ├─CreateClub
    │  │  ├─CreateClub1
    │  │  ├─CreateClub2
    │  │  ├─CreateClub3
    │  │  └─CreateClub4
    │  ├─DetailBookReview
    │  ├─DetailClub
    │  ├─EditProfile
    │  ├─Error404
    │  ├─Filter
    │  ├─Intro
    │  ├─Login
    │  ├─MainBookReview
    │  ├─MainClub
    │  ├─ManagementClub
    │  ├─MyClubList
    │  ├─MyPage
    │  ├─SignUp
    │  └─Welcome
    ├─routes
    ├─store
    ├─styles
    └─utils

```

</details>

| 인트로                                                                                                               | 로그인                                                                                                               | 로그인성공                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![인트로](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/b9b582ad-af06-4ddc-b18a-f0b1a07dd380) | ![로그인](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/48bab667-5998-4819-91c7-43c68ff8334f) | ![로그인성공](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/2443adde-9f66-4fc1-8c7c-dadc67fa725a) |

| 회윈가입 1 of 2                                                                                                         | 회원가입 2 of 2                                                                                                         | 회원이 아니신가요                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ![회윈가입1](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/be926d3f-873c-44a6-9549-b8570072ab67) | ![회원가입2](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/58e102fb-3827-4b62-87fe-858d3f6b72ba) | ![회원이아니신가요](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/abef7424-0418-44e8-a19b-12b874013830) |

| 모임 목록                                                                                                              | 모임 상세                                                                                                              | 쇼설링 멤버 관리                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| ![모임목록](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/c84b17ed-f843-43aa-96e3-23eba1d2b800) | ![모임상세](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/aa4fc31f-6e07-4610-a881-cc8fb9b4e8da) | ![쇼설링멤버관리](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/b7d6a3bb-bf2c-48d1-9f6e-9b50b946e440) |

| 모임 생성 1 of 4                                                                                                        | 모임 생성 2 of 4                                                                                                        | 모임 생성 1 of 4                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![모임생성1](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/e8090a1a-242e-4a0d-a535-6ec9a9adef1b) | ![모임생성2](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/3357adaa-a4c3-4588-98ab-79c6255713ad) | ![모임생성3](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/756b7266-c37f-427f-9e76-251381758f91) |

| 모임 생성 1 of 4                                                                                                        | 모임 신청 1 of 2                                                                                                        | 모임 신청 2 of 2                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![모임생성4](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/dfb436c8-355a-4c89-98fa-8f672c63261a) | ![모임신청1](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/e79bf5c7-41e4-4458-880d-ab77e7ea7da0) | ![모임신청2](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/597fe1dd-33b8-4cda-be1f-c97fc257f4a2) |

| 독후감 목록                                                                                                              | 독후감 상세                                                                                                              | 독후감 작성                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| ![독후감목록](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/6cddfeac-19d6-4f02-b347-1ac96de0ea93) | ![독후감상세](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/e1941513-38d2-4904-9ce9-d733dcd4db78) | ![독후감작성](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/814841ef-7e7e-41ce-be54-f2c55f7fea94) |

| 독후감 검색                                                                                                              | 나의 모임                                                                                                              | 나의 모임 검색                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ![독후감검색](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/7d15949d-bf7e-4a19-8840-bb7c9d1682d0) | ![나의모임](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/5e510fdf-5bfc-4743-8e0a-565b5fccd472) | ![나의모임검색](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/f3f317f3-9c6b-4ef9-8024-790581b8c1f8) |

| 나의 채팅                                                                                                              | 채팅                                                                                                                 | 로딩중                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ![나의채팅](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/c5d79aad-d7aa-4519-9504-d27955f566cd) | ![채팅창](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/f1ac119e-9c82-4911-b500-a3beb4dc4fea) | ![로딩중](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/f0a9b5bb-cfb8-4201-8da6-00fbeb4faec1) |

| 마이페이지                                                                                                               | 프로필 수정                                                                                                              | 로그아웃 확인                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ![마이페이지](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/874f8cbc-b370-401b-9221-e4204b9210fd) | ![프로필수정](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/1470ff5a-7555-4612-8f21-bd06bb548d02) | ![로그아웃확인](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/50475140/36957bd8-5b50-46c4-aafe-eb703048e7f2) |

### DataBase structure

![ERD](https://github.com/FRONTENDSCHOOL8/bookjeok-bookjeok/assets/134420660/05744bd8-e0f7-4ce3-be4c-f8b0936a2e33)

### 소감

#### 수양

수업을 들으면서 최대한 놓치는 부분 없이 열심히 따라가고자 했지만, 리액트 생태계가 워낙 넓고 다양해서 공부해야 할 것이 너무 많았다. 특히
수업 마지막 주에 라우터, 전역 상태 관리, Tanstack Query를 배우면서 너무 어렵고, 잘 소화해 내지 못했지만 이번 프로젝트에서 부족한
부분을 공부하면서 최대한 적용해내려고 노력한 덕에 정말 많은 공부를 하게 되었다. 특히 프로젝트 초반에 왜 Tanstack Query를 사용하는지,
어떤 상황에 전역 상태 관리를 해야 하는지 전혀 모른 체 물음표만 가득했지만, 이제는 기능을 구현하기 위해 조금만 고민해 보면 어떤 툴을
사용하고, 어떤 방식을 채택해야 할지 조금은 감이 잡혔다. 수료 후에는 이번에 사용해 보지 못했던 TS, Redux, NEXT.js 등을 공부하면서
프론트엔드 개발자로 얼른 성장하고 싶다! 함께 쉽지 않은 상황에서 열심히 임해주신 유나님, 현지님 정말 감사합니다! :laughing:

#### 현지

주먹구구식으로 배워가면서 바로 적용하는 게 힘들었지만 라이브러리가 있는건 이유가 있습니다… 탠스택쿼리 최고 :smiling_face_with_three_hearts: <br>
기획 과정에서 얘기 나눈 페이지 수를 줄일까 고민했는데 저희 셋이서 해냈음에 너무 뿌듯해요!!!!!!!!!!!!!!! <br>
셋이서 500커밋 . . . 이게 되네 :sunglasses: 이게 다 저희 팀원이랑 도움 요청할 때마다 도와주신 분들 덕분입니다 :pleading_face: :black_heart: <br>
덕분에 모든 순간이 좋은 기억으로 남을 것 같아요ㅎ.ㅎ 다들 건강하게 개발하십시오 ! 척추 수술 5000만원 ! ! :woman_technologist: :man_technologist:

#### 유나

나에겐 너무 어려운 리액트 수업, 프로젝트에서는 아토믹 컴포넌트를 만들어 보며 리액트와 친숙해지는 시간을 가질 수 있었다.
팀원분들과 같이 만들어 보면서 한 페이지라도 맛보기 해 볼 수 있었다. 덕분에 많이 배울 수 있었고, 팀원분들 정말 감사해요!! :full_moon_with_face:
