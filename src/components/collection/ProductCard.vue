<script setup lang="ts">
import type { Product } from '../../stores/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="product.image" :alt="product.name" class="product-image">
      <div class="hover-overlay">
        <button class="quick-view-btn">Quick View</button>
      </div>
    </div>
    
    <div class="product-info">
      <div class="header">
        <h3 class="name">{{ product.name }}</h3>
        <span class="price">{{ product.price }}</span>
      </div>
      <p class="description">{{ product.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.image-container {
  position: relative;
  aspect-ratio: 3/4;
  background-color: var(--bg-secondary);
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .hover-overlay {
  opacity: 1;
}

.quick-view-btn {
  background-color: white;
  color: var(--text-primary);
  font-family: var(--font-main);
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  box-shadow: 0 24px 48px -12px rgba(50, 50, 51, 0.08);
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.quick-view-btn:hover {
  background-color: #f6f3f2;
  transform: translateY(-2px);
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.name {
  font-family: var(--font-headline);
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.45px;
  color: var(--text-primary);
  margin: 0;
}

.price {
  font-family: var(--font-main);
  font-size: 14px;
  color: var(--text-secondary);
}

.description {
  font-family: var(--font-main);
  font-size: 12px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin: 0;
}
</style>
