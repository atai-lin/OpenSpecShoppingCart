## Context

目前專案處於初始化階段。根據設計需求，我們需要建立一個基於 Vue 3 的前端應用程式，並將 Figma 提供的高保真設計稿轉化為可互動的、響應式的網頁。

## Goals / Non-Goals

**Goals:**
- 初始化完整的 Vue 3 + Vite + TypeScript 開發環境。
- 整合 Pinia 作為全局狀態管理工具。
- 根據 Figma 設計稿（Node 0:221）實作像素級精確的首頁佈局。
- 建立具備可重用性的基礎 UI 元件庫（如 Button, NavItem, SectionContainer）。

**Non-Goals:**
- 本階段不實作完整的購物車結帳流程。
- 不實作後端 API 對接，僅使用 Mock 資料或靜態內容。
- 不實作多國語言支持。

## Decisions

- **Framework**: 使用 Vue 3 (Composition API) 搭配 Vite，提供最優的開發體驗與構建速度。
- **Language**: 全面使用 TypeScript 以確保程式碼品質與型別安全。
- **State Management**: 使用 Pinia，相較於 Vuex 具備更好的 TypeScript 支持。
- **Styling Strategy**: 
  - 使用 Vanilla CSS 結合 CSS Variables (Design Tokens) 管理顏色、間距與字體。
  - 考量到 Figma 設計中大量的絕對定位與複雜佈局，部分元件將採用 Flexbox 或 Grid 進行動態佈局優化。
- **Asset Management**: 將 Figma 提供的圖片資源整合至專案的 `assets` 目錄下。

## Risks / Trade-offs

- **視覺精確度風險**：Figma 匯出的 CSS 可能包含過多絕對定位，直接套用可能導致響應式問題。
  - **對策**：將絕對定位的區塊轉換為語義化的 Flex/Grid 佈局，並根據視窗寬度調整 CSS。
- **字體渲染差異**：設計使用了 Work Sans 與 Manrope。
  - **對策**：在全域樣式中引入 Google Fonts 或對應的字體檔案。
