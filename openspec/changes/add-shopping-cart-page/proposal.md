## Why

目前平台缺乏購物車功能，使用者無法在購買前管理選中的商品、調整數量或查看總計金額。為了提升購物體驗並完成電商核心流程，我們需要一個獨立的購物車頁面。

## What Changes

- **新增購物車頁面**：建立 `/cart` 路由與相對應的 `CartView.vue` 頁面。
- **購物車狀態管理**：新增 `stores/cart.ts` 使用 Pinia 管理購物車狀態（包含新增、刪除、調整數量）。
- **導覽列整合**：在 `TopNavBar.vue` 中新增導向購物車頁面的入口，並顯示目前購物車內的商品數量。
- **購物車組件**：建立 `CartItem.vue`（單項商品顯示）與 `CartSummary.vue`（結帳總計）等組件。

## Capabilities

### New Capabilities
- `shopping-cart`: 處理購物車的顯示、商品管理邏輯、小計與總計計算。

### Modified Capabilities
- `navigation`: 修改導覽列以包含購物車入口與即時數量統計。

## Impact

- **路由**：新增 `src/router/index.ts` 中的 `/cart` 路徑。
- **狀態管理**：新增 `src/stores/cart.ts`。
- **UI 組件**：新增 `src/views/CartView.vue` 及 `src/components/cart/` 目錄下的相關組件。
- **現有組件**：修改 `src/components/layout/TopNavBar.vue` 以顯示購物車狀態。
