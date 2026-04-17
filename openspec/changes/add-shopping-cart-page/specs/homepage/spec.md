## MODIFIED Requirements

### Requirement: 響應式導覽列 (TopNavBar)
系統 SHALL 提供一個固定的導覽列，包含品牌識別、主要分類連結及購物車入口，並具備毛玻璃效果的背景。導覽列應即時顯示目前購物車內的商品數量。

#### Scenario: 捲動頁面時的導覽列表現
- **WHEN** 使用者在頁面向下捲動
- **THEN** 導覽列保持在視窗頂部 (Sticky)，且背景呈現具備 12px 模糊效果的半透明背景 (rgba(252, 249, 248, 0.8))。

#### Scenario: 購物車狀態顯示
- **WHEN** 購物車內有商品時
- **THEN** 導覽列中的購物車圖示旁邊 SHALL 顯示正確的商品件數標籤。

## ADDED Requirements

### Requirement: 商品快速加入購物車功能 (Quick Add)
在熱銷商品展示區域，系統 SHALL 允許使用者透過商品圖上的懸停互動啟動快速加入動作，並立即更新購物車狀態。

#### Scenario: 滑鼠懸停於商品圖
- **WHEN** 使用者將滑鼠懸停在任一熱銷商品圖片上
- **THEN** 商品圖片上方 SHALL 以淡入動畫顯示「Quick Add」按鈕。

#### Scenario: 執行快速加入
- **WHEN** 使用者點擊「Quick Add」按鈕
- **THEN** 該商品 SHALL 被新增至購物車中，且導覽列的購物車件數標籤 SHALL 即時更新。
