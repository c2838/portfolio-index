import { createContext } from "react"

const portfolioDatas = [
  {
    id: 1,
    imgUrl: "https://i.imgur.com/xmtr7D1.png",
    demoUrl: "https://c2838.github.io/FAKE-USER-LIST/",
    title: "Fake User List",
    introduction:
      "以 HTML、CSS 與原生 JS 進行設計，主題為使用者清單，學習基本 router 觀念，分成主頁與最愛頁面，利用 Local Storage 將喜愛的使用者加入最愛清單並進行檢視，其中資料利用Axios進行串接，CSS 使用Bootstarp框架輔助，並練習使用JS渲染資料。",
  },
  {
    id: 2,
    imgUrl: "https://i.imgur.com/Ef9r8ts.png",
    demoUrl: "https://c2838.github.io/B2C-Layout/",
    title: "B2C Layout",
    introduction:
      "以 HTML 與 CSS 進行設計，主要為利用電商網站頁面進行 RWD 響應式設計的學習，依循 mobile first 原則，在小於 600px 、小於 960px 大於 600px 、大於960px 之間進行切換。",
  },
  {
    id: 3,
    imgUrl: "https://i.imgur.com/tYoUvp2.png",
    demoUrl: "https://c2838.github.io/campaign-arrangement/",
    title: "Campaign Arrange System",
    introduction:
      "以 HTML、SCSS 及原生 JS 進行設計，主要切版廣告排期系統，並學習 SCSS 的使用，模擬了 CRUD 的動作與深色模式的切換，並利用 JS 去撰寫邏輯完成全選等。",
  },
  {
    id: 4,
    imgUrl: "https://i.imgur.com/5dWQQ2x.png",
    demoUrl: "https://c2838.github.io/alpha-shop/",
    title: "Alpha Shop",
    introduction:
      "以 HTML、CSS module 及 React.js 進行設計，主要切版一頁式電商結帳流程，並學習 React.js 與 CSS module 的使用，確實的練習了 React 中 useState、useContext 及 useEffect 等常用 Hook ，並且了解原生表單與使用框架後表單的行為差異。",
  },
  {
    id: 5,
    imgUrl: "https://i.imgur.com/sTWIPfN.png",
    demoUrl: "https://c2838.github.io/todolist/",
    title: "Todo List",
    introduction:
      "以 HTML、CSS module 及 React.js 進行設計，主要切版 todo list，並學習 React-router-dom 的使用，並理解 SPA/SSA 的模式差異；另外也練習了自訂 React Hook，且利用 Axios 進行後端串接，並利用 Local Storage 記憶登入狀態，也學習使用軟體( Postman )進行 API 測試。",
  },
];


export const PortfolioDatasContext = createContext(portfolioDatas)