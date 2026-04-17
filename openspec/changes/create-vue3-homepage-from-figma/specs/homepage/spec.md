## ADDED Requirements

### Requirement: 首頁視覺佈局實作
系統 SHALL 根據 Figma 設計實作完整的首頁佈局，確保視覺呈現與設計稿一致，包含顏色、字體、間距與排版。

#### Scenario: 訪問首頁顯示完整內容
- **WHEN** 使用者進入首頁根路徑 `/`
- **THEN** 系統顯示包含 Hero Section (主視覺)、Category Bento Grid (分類網格)、Bestsellers (熱銷商品)、Brand Ethos (品牌理念) 以及頁首與頁尾的完整頁面。

### Requirement: 響應式導覽列 (TopNavBar)
系統 SHALL 提供一個固定的導覽列，包含品牌識別與主要分類連結，並具備毛玻璃效果的背景。

#### Scenario: 捲動頁面時的導覽列表現
- **WHEN** 使用者在首頁向下捲動
- **THEN** 導覽列保持在視窗頂部 (Sticky)，且背景呈現具備 12px 模糊效果的半透明背景 (rgba(252, 249, 248, 0.8))。

### Requirement: 商品快速加入購物車功能 (Quick Add)
在熱銷商品展示區域，系統 SHALL 允許使用者透過商品圖上的懸停互動啟動快速加入動作。

#### Scenario: 滑鼠懸停於商品圖
- **WHEN** 使用者將滑鼠懸停在任一熱銷商品圖片上
- **THEN** 商品圖片上方 SHALL 以淡入動畫顯示「Quick Add」按鈕。

### Requirement: 專案基礎設施建立 (Vue 3 + TS + Pinia)
系統 SHALL 初始化為採用 Vue 3 (Composition API)、TypeScript 與 Pinia 的前端專案架構。

#### Scenario: 專案環境驗證
- **WHEN** 開發人員啟動開發伺服器
- **THEN** 系統正確載入 TypeScript 配置並能正常執行 Vue 元件與 Pinia Store。
