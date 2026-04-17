## ADDED Requirements

### Requirement: 購物車頁面列表展示 (Cart Items Display)
系統 SHALL 提供一個專屬的購物車頁面 `/cart`，並列出所有已加入購物車的商品及其詳細資訊。

#### Scenario: 訪問空購物車頁面
- **WHEN** 使用者進入 `/cart` 且購物車內無任何商品
- **THEN** 系統 SHALL 顯示「購物車目前為空」的提示訊息及「返回商店」的連結。

#### Scenario: 訪問已有商品的購物車
- **WHEN** 使用者進入 `/cart` 且購物車內已有商品
- **THEN** 系統 SHALL 為每項商品顯示：圖片、名稱、描述、單價、目前數量及該項商品的小計。

### Requirement: 購物車商品數量調整 (Cart Quantity Management)
系統 SHALL 允許使用者在購物車頁面即時調整每項商品的數量，或將商品從購物車中移除。

#### Scenario: 增加商品數量
- **WHEN** 使用者點擊商品旁的「+」按鈕
- **THEN** 系統 SHALL 增加該商品的數量，並即時更新該項商品的小計及購物車總金額。

#### Scenario: 減少商品數量
- **WHEN** 使用者點擊商品旁的「-」按鈕（目前數量大於 1）
- **THEN** 系統 SHALL 減少該商品的數量，並即時更新該項商品的小計及購物車總金額。

#### Scenario: 移除商品
- **WHEN** 使用者點擊商品的「移除 (Remove)」按鈕
- **THEN** 系統 SHALL 從購物車中完全刪除該項商品，並即時更新購物車清單與總金額。

### Requirement: 購物車結帳摘要 (Cart Checkout Summary)
系統 SHALL 在購物車頁面右側或底部提供結帳摘要，顯示所有項目的總計金額、運費與最終金額。

#### Scenario: 計算總額
- **WHEN** 購物車商品清單發生任何變動（數量調整或商品移除）
- **THEN** 系統 SHALL 自動重新計算並顯示所有項目的總計金额 (Subtotal)。
