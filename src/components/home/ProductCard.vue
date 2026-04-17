<script setup lang="ts">
import AppButton from '../common/AppButton.vue'

interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
}

defineProps<{
  product: Product
}>()
</script>

<template>
  <div className="product-card">
    <div className="product-image-container">
      <img :src="product.image" :alt="product.name" className="product-image" />
      <div className="quick-add-overlay">
        <AppButton variant="secondary" className="quick-add-btn">Quick Add</AppButton>
      </div>
    </div>
    
    <div className="product-info">
      <h3 className="product-name">{{ product.name }}</h3>
      <p className="product-desc">{{ product.description }}</p>
      <div className="product-price">{{ product.price }}</div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.product-image-container {
  position: relative;
  aspect-ratio: 3/4;
  background-color: var(--bg-product);
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

.quick-add-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .quick-add-overlay {
  opacity: 1;
}

.quick-add-btn {
  background-color: white !important;
  color: var(--text-primary) !important;
  padding: 12px 24px !important;
  font-size: 10px !important;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1);
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-name {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.45px;
  margin: 0;
}

.product-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.4;
}

.product-price {
  font-family: var(--font-main);
  font-weight: 600;
  font-size: 16px;
  color: var(--brand-green);
  margin-top: 4px;
}
</style>
