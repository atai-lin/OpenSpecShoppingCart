<script setup lang="ts">
import { useProductStore } from '../../stores/product'
import ProductCard from './ProductCard.vue'

const productStore = useProductStore()
</script>

<template>
  <section className="bestsellers-section">
    <div className="section-container">
      <div className="section-header">
        <div className="header-left">
          <div className="section-tag">Our Curated Essentials</div>
          <h2 className="section-title">Bestsellers</h2>
        </div>
        <a href="#" className="view-all-link">View All Products</a>
      </div>
      
      <div className="products-grid">
        <ProductCard 
          v-for="product in productStore.bestsellers" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bestsellers-section {
  background-color: var(--bg-secondary);
  padding: 96px 0;
}

.section-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 64px;
}

.header-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.section-tag {
  font-size: 12px;
  color: var(--brand-green);
  text-transform: uppercase;
  letter-spacing: 2.4px;
}

.section-title {
  font-family: var(--font-headline);
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -1.8px;
  color: var(--text-primary);
  margin: 0;
}

.view-all-link {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: var(--brand-green);
  border-bottom: 1px solid var(--brand-green);
  padding-bottom: 5px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}
</style>
