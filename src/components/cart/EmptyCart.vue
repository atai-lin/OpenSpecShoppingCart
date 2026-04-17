<template>
  <div class="empty-cart">
    <div class="empty-icon">🛒</div>
    <h2>您的購物車是空的</h2>
    <p>看來您還沒有挑選任何商品。去逛逛我們的精選系列吧！</p>
    <router-link to="/collections/winter" class="browse-btn">瀏覽系列</router-link>
  </div>
</template>

<style scoped>
.empty-cart {
  text-align: center;
  padding: 5rem 2rem;
  background-color: #fafafa;
  border-radius: 8px;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.empty-cart h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.empty-cart p {
  color: #666;
  margin-bottom: 2rem;
}

.browse-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
}

.browse-btn:hover {
  background-color: #000;
}
</style>
