<script setup lang="ts">
import CollectionHero from '../components/collection/CollectionHero.vue'
import SidebarFilters from '../components/collection/SidebarFilters.vue'
import ProductGrid from '../components/collection/ProductGrid.vue'
</script>

<template>
  <div class="product-listing-view">
    <CollectionHero />
    
    <div class="main-content">
      <div class="container">
        <SidebarFilters />
        <ProductGrid />
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-listing-view {
  background-color: var(--bg-primary);
  min-height: 100vh;
}

.main-content {
  padding: 0 32px 96px;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  gap: 64px;
  align-items: flex-start;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 48px;
  }
}
</style>
