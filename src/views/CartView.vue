<script setup lang="ts">
import { useCartStore } from '../stores/cart'
import CartItem from '../components/cart/CartItem.vue'
import CartSummary from '../components/cart/CartSummary.vue'
import EmptyCart from '../components/cart/EmptyCart.vue'

const cartStore = useCartStore()

const handleUpdateQuantity = (id: number, quantity: number) => {
  cartStore.updateQuantity(id, quantity)
}

const handleRemove = (id: number) => {
  cartStore.removeItem(id)
}
</script>

<template>
  <div class="cart-view">
    <div class="container">
      <h1 class="page-title">您的購物車 ({{ cartStore.totalItems }})</h1>
      
      <div v-if="cartStore.items.length > 0" class="cart-content">
        <div class="cart-items-list">
          <CartItem 
            v-for="item in cartStore.items" 
            :key="item.id" 
            :item="item"
            @update-quantity="handleUpdateQuantity"
            @remove="handleRemove"
          />
        </div>
        
        <div class="cart-summary-section">
          <CartSummary 
            :subtotal="cartStore.subtotal" 
            :total="cartStore.totalAmount"
          />
        </div>
      </div>
      
      <div v-else>
        <EmptyCart />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-view {
  padding: 10rem 0 5rem;
  min-height: 80vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
}

.cart-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 4rem;
  align-items: start;
}

@media (max-width: 900px) {
  .cart-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.cart-items-list {
  display: flex;
  flex-direction: column;
}
</style>
