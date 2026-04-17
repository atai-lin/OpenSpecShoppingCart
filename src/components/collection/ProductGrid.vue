<script setup lang="ts">
import { useProductStore } from '../../stores/product'
import { storeToRefs } from 'pinia'
import ProductCard from './ProductCard.vue'

const productStore = useProductStore()
const { filteredProducts } = storeToRefs(productStore)
</script>

<template>
  <div class="product-grid-wrapper">
    <div class="product-grid">
      <div 
        v-for="product in filteredProducts" 
        :key="product.id" 
        class="grid-item"
      >
        <ProductCard :product="product" />
      </div>
    </div>
    
    <div class="pagination-area">
      <div class="divider"></div>
      <div class="pagination">
        <button class="pag-link disabled">Previous</button>
        <div class="page-numbers">
          <button class="page-btn active">01</button>
          <button class="page-btn">02</button>
          <button class="page-btn">03</button>
        </div>
        <button class="pag-link">Next</button>
      </div>
      
      <button class="load-more-btn">
        Load More Essentials
      </button>
    </div>
  </div>
</template>

<style scoped>
.product-grid-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 128px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 80px;
}

/* Second column offset logic */
.grid-item:nth-child(3n+2) {
  margin-top: 48px;
}

.pagination-area {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: rgba(178, 178, 177, 0.2);
  margin-bottom: 48px;
}

.pagination {
  display: flex;
  gap: 48px;
  align-items: center;
  margin-bottom: 64px;
}

.pag-link {
  background: none;
  border: none;
  font-family: var(--font-main);
  font-size: 12px;
  letter-spacing: 1.2px;
  color: var(--text-primary);
  cursor: pointer;
}

.pag-link.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  gap: 32px;
}

.page-btn {
  background: none;
  border: none;
  font-family: var(--font-main);
  font-size: 12px;
  letter-spacing: 1.2px;
  color: var(--text-primary);
  opacity: 0.5;
  cursor: pointer;
  padding: 0;
  text-transform: uppercase;
}

.page-btn.active {
  opacity: 1;
  font-weight: 600;
  border-bottom: 1px solid var(--text-primary);
}

.load-more-btn {
  background-color: var(--brand-green);
  color: var(--brand-green-light);
  font-family: var(--font-main);
  font-size: 12px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  padding: 16px 48px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.load-more-btn:hover {
  opacity: 0.9;
}

@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .grid-item:nth-child(3n+2) {
    margin-top: 0;
  }
  
  .grid-item:nth-child(2n+2) {
    margin-top: 48px;
  }
}

@media (max-width: 640px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
  
  .grid-item:nth-child(2n+2) {
    margin-top: 0;
  }
}
</style>
