## 上下文

專案目前使用 Vue 3、Vite 與 Pinia。為了實作「冬日系列」商品列表，我們需要將目前的單頁架構擴展為多頁架構（引入 `vue-router`），並建立高度可重用的篩選與網格組件。

## 目標 / 非目標

**目標：**
- 實作具備篩選功能的商品列表頁面。
- 引入路由系統以管理導覽。
- 達成與 Figma 1:1 的視覺保真度，包括特殊的偏移網格佈局。

**非目標：**
- 實作後端 API（將使用 Pinia 內的模擬數據）。
- 實作快速查看 (Quick View) 的彈出視窗細節功能。

## 技術決策

### 1. 導覽方案：引入 `vue-router`
- **方案**：建立 `src/router/index.ts`。
- **路由**：`/` (首頁) 與 `/collections/winter` (新頁面)。
- **理由**：提供標準化的 URL 管理與歷史紀錄支援。

### 2. 組件架構
- **視圖層**：`ProductListingView.vue` 作為容器。
- **功能組件**：
  - `CollectionHero.vue`：負責頁首標題。
  - `SidebarFilters.vue`：封裝分類、材質、顏色的狀態與邏輯。
  - `ProductGrid.vue`：利用 CSS Grid `nth-child(3n+2)` 實作列偏移。
  - `ProductCard.vue`：實作懸停狀態。

### 3. 狀態管理
- **Store**：擴展 `src/stores/product.ts`。
- **狀態**：加入 `activeFilters` 與 `winterProducts` 列表。
- **計算屬性 (Getters)**：實作 `filteredProducts` 邏輯，根據選取的類別、材質與顏色動態過濾。

### 4. 樣式實作
- 使用 **Scoped CSS**。
- 延用 `variables.css` 中的設計標記（Design Tokens）。
- **網格偏移**：在桌面端對第二欄項目套用 `margin-top: 48px`。在平板/手機端自動切換為無偏移的 2 欄或 1 欄佈局。

## 風險 / 權衡

- **[風險] 佈局對齊**：特殊的位移設計可能影響垂直節奏。
  - **緩解**：透過 CSS Grid 與精確的 `nth-child` 選擇器確保在不同斷點下的對齊。
- **[風險] 依賴項增加**：引入 `vue-router` 需調整 `App.vue`。
  - **緩解**：將現有內容遷移至 `HomeView.vue` 並使用 `<router-view>`。
