<script setup lang="ts">
import { CartItem } from '../../stores/cart'

defineProps<{
  item: CartItem
}>()

const emit = defineEmits<{
  (e: 'updateQuantity', id: number, quantity: number): void
  (e: 'remove', id: number): void
}>()
</script>

<template>
  <div class="cart-item">
    <div class="item-image">
      <img :src="item.image" :alt="item.name" />
    </div>
    <div class="item-details">
      <h3>{{ item.name }}</h3>
      <p class="description">{{ item.description }}</p>
      <p class="price">{{ item.price }}</p>
    </div>
    <div class="item-actions">
      <div class="quantity-controls">
        <button @click="emit('updateQuantity', item.id, item.quantity - 1)" :disabled="item.quantity <= 1">-</button>
        <span class="quantity">{{ item.quantity }}</span>
        <button @click="emit('updateQuantity', item.id, item.quantity + 1)">+</button>
      </div>
      <button class="remove-btn" @click="emit('remove', item.id)">移除</button>
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border-color, #eee);
  align-items: center;
}

.item-image img {
  width: 100px;
  height: 120px;
  object-fit: cover;
}

.item-details {
  flex: 1;
}

.item-details h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.description {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.price {
  font-weight: 500;
}

.item-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}

.quantity-controls {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.quantity-controls button {
  background: none;
  border: none;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
}

.quantity-controls button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.quantity {
  padding: 0 0.5rem;
  min-width: 1.5rem;
  text-align: center;
}

.remove-btn {
  background: none;
  border: none;
  text-decoration: underline;
  color: #666;
  font-size: 0.85rem;
  cursor: pointer;
}
</style>
