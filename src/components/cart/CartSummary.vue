<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  subtotal: number
  total: number
}>()

const formattedSubtotal = computed(() => `$${props.subtotal.toFixed(2)}`)
const formattedTotal = computed(() => `$${props.total.toFixed(2)}`)
</script>

<template>
  <div class="cart-summary">
    <h2>訂單摘要</h2>
    <div class="summary-line">
      <span>商品小計</span>
      <span>{{ formattedSubtotal }}</span>
    </div>
    <div class="summary-line">
      <span>預估運費</span>
      <span>免費</span>
    </div>
    <div class="summary-line total">
      <span>總計</span>
      <span>{{ formattedTotal }}</span>
    </div>
    <button class="checkout-btn">前往結帳</button>
  </div>
</template>

<style scoped>
.cart-summary {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
}

.cart-summary h2 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #666;
}

.total {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
  font-weight: 600;
  color: #333;
  font-size: 1.1rem;
}

.checkout-btn {
  width: 100%;
  padding: 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 1.5rem;
  font-weight: 500;
  cursor: pointer;
}

.checkout-btn:hover {
  background-color: #000;
}
</style>
