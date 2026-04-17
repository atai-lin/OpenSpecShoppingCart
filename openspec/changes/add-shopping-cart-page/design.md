## Context

目前專案使用 Vue 3 與 Pinia 進行開發，但尚未具備處理使用者購物行為的邏輯。為了支援後續的結帳流程，我們需要建立一個健全的購物車系統，整合現有的商品資料並提供持久化的狀態管理。

## Goals / Non-Goals

**Goals:**
- 建立 `stores/cart.ts` 集中管理購物清單、數量調整與總額計算。
- 實作響應式的 `CartView.vue`，確保在行動版與桌面版均有良好的極簡視覺表現。
- 整合 `localStorage`，確保使用者重新整理頁面後購物車內容不會消失。
- 更新 `TopNavBar.vue` 以即時反映購物車內容件數。

**Non-Goals:**
- 本階段不包含正式的支付網關整合 (Payment Gateway Integration)。
- 不包含使用者登入/會員系統與雲端購物車同步。

## Decisions

### 1. 獨立的購物車 Store (Dedicated Cart Store)
- **決策**：建立 `src/stores/cart.ts`，而非將邏輯放入 `product.ts`。
- **理由**：購物車邏輯（增刪查改、數量驗證、總額計算）與商品展示邏輯（過濾、分類）具備不同的關注點，分開存放有利於代碼維護與擴展。

### 2. 資料持久化 (Persistence)
- **決策**：在 `cart` store 中透過 Pinia 訂閱功能或手動同步至 `localStorage`。
- **理由**：提升使用者體驗，避免因意外重新整理導致挑選好的商品消失。

### 3. 組件結構 (Component Structure)
- **決策**：將購物車組件歸類於 `src/components/cart/` 目錄。
- **架構**：
  - `CartItem.vue`: 處理單一商品的顯示與數量控制。
  - `CartSummary.vue`: 處理訂單總計金額與結帳按鈕。
  - `EmptyCart.vue`: 處理購物車為空時的狀態顯示。

## Risks / Trade-offs

- **[風險] 價格計算精度**：JavaScript 的浮點數運算可能在計算總額時產生微小誤差。
- **[對策]**：在顯示總額前使用 `toFixed(2)` 進行處理，或內部以「美分 (cents)」作為整數計算單位。
- **[風險] 商品資料同步**：若後端商品價格變動，`localStorage` 中的舊資料可能與現況不符。
- **[對策]**：在加載購物車時，可考慮與 `product` store 的最新資料進行交叉驗證（本階段先以簡化實作為主）。
