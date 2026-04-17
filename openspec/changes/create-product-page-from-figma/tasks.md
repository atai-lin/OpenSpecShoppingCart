## 1. 架構基礎建設

- [ ] 1.1 安裝 `vue-router` 並建立路由設定檔案 `src/router/index.ts`。
- [ ] 1.2 將 `App.vue` 內容遷移至 `src/views/HomeView.vue`。
- [ ] 1.3 更新 `App.vue` 為路由進入點 (RouterView)。
- [ ] 1.4 更新 `TopNavBar.vue`，將「Collections」連結至 `/collections/winter`。

## 2. 狀態管理與數據

- [ ] 2.1 更新 `src/stores/product.ts` 的模型，加入 `category`、`material`、`colors` 欄位。
- [ ] 2.2 在 Store 中植入「冬日系列」的模擬數據與影像連結。
- [ ] 2.3 實作 Store 中的 `filteredProducts` 計算屬性與切換篩選條件的 Action。

## 3. 功能組件開發

- [ ] 3.1 建立 `CollectionHero.vue` 組件。
- [ ] 3.2 建立 `SidebarFilters.vue` 並連接 Store 狀態。
- [ ] 3.3 建立 `ProductCard.vue`（含懸停 Quick View 效果）。
- [ ] 3.4 建立 `ProductGrid.vue` 並實作 CSS Grid 的 nth-child 位移邏輯。

## 4. 視圖整合與響應式優化

- [ ] 4.1 建立 `ProductListingView.vue` 並組裝各個組件。
- [ ] 4.2 針對行動端進行樣式調整，確保網格與側邊欄在小螢幕下的正確顯示。
- [ ] 4.3 進行視覺對比稽核，確保與 Figma 設計稿一致。
