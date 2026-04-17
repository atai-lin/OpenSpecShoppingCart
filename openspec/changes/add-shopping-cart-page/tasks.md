## 1. 基礎架構與狀態管理 (Foundation & State Management)

- [x] 1.1 建立 `src/stores/cart.ts`，定義 `CartItem` 介面與 Pinia Store。
- [x] 1.2 實作購物車核心 Actions：`addItem`, `removeItem`, `updateQuantity`。
- [x] 1.3 實作購物車 Getters：`totalItems`, `subtotal`, `totalAmount`。
- [x] 1.4 整合 `localStorage` 進行狀態持久化（在 Store 訂閱中實作同步）。

## 2. 路由配置 (Routing)

- [x] 2.1 在 `src/router/index.ts` 中新增 `/cart` 路由，並配置 Lazy Loading 載入 `CartView.vue`。

## 3. 購物車組件開發 (Component Development)

- [x] 3.1 建立 `src/components/cart/CartItem.vue`，包含商品圖、名稱、單價、數量調整按鈕與移除按鈕。
- [x] 3.2 建立 `src/components/cart/CartSummary.vue`，顯示小計、預估運費與總計，並包含「結帳」按鈕。
- [x] 3.3 建立 `src/components/cart/EmptyCart.vue`，顯示購物車為空時的導引文字與「回到商店」按鈕。

## 4. 頁面整合與全局導覽 (View Integration & Navigation)

- [x] 4.1 建立 `src/views/CartView.vue`，整合上述購物車組件並處理佈局。
- [x] 4.2 修改 `src/components/layout/TopNavBar.vue`，加入購物車圖示連結與即時件數標籤 (Badge)。
- [x] 4.3 在 `src/components/home/ProductCard.vue`（或相關商品卡片）中實作「Quick Add」功能，點擊後觸發 `cartStore.addItem`。
