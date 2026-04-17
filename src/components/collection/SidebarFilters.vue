<script setup lang="ts">
import { useProductStore } from '../../stores/product'
import { storeToRefs } from 'pinia'

const productStore = useProductStore()
const { activeFilters, categoryCounts } = storeToRefs(productStore)

const categories = ['Outerwear', 'Knitwear', 'Tailoring', 'Accessories', 'Loungewear']
const materials = ['Sourced Cashmere', 'Organic Wool', 'Raw Silk']
const colorSwatches = [
  { name: 'Black', value: '#323233' },
  { name: 'Forest', value: '#536254' },
  { name: 'Stone', value: '#dbdad9' },
  { name: 'Beige', value: '#e9e2d4' },
  { name: 'White', value: '#ffffff' }
]
</script>

<template>
  <aside class="sidebar-filters">
    <div class="filter-group">
      <h3 class="filter-title">Categories</h3>
      <ul class="filter-list">
        <li v-for="cat in categories" :key="cat">
          <button 
            :class="['filter-btn', { active: activeFilters.categories.includes(cat) }]"
            @click="productStore.toggleCategoryFilter(cat)"
          >
            {{ cat }} ({{ categoryCounts[cat] || 0 }})
          </button>
        </li>
      </ul>
    </div>

    <div class="filter-group">
      <h3 class="filter-title">Material</h3>
      <div class="checkbox-list">
        <label v-for="mat in materials" :key="mat" class="checkbox-label">
          <input 
            type="checkbox" 
            :checked="activeFilters.materials.includes(mat)"
            @change="productStore.toggleMaterialFilter(mat)"
          >
          <span class="custom-checkbox"></span>
          {{ mat }}
        </label>
      </div>
    </div>

    <div class="filter-group">
      <h3 class="filter-title">Color</h3>
      <div class="color-grid">
        <button 
          v-for="color in colorSwatches" 
          :key="color.value"
          :class="['color-swatch', { active: activeFilters.colors.includes(color.value) }]"
          :style="{ backgroundColor: color.value }"
          :title="color.name"
          @click="productStore.toggleColorFilter(color.value)"
        ></button>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar-filters {
  width: 256px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  flex-shrink: 0;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.filter-title {
  font-family: var(--font-headline);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--text-primary);
}

.filter-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.filter-btn {
  background: none;
  border: none;
  font-family: var(--font-main);
  font-size: 14px;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0;
  text-align: left;
  transition: color 0.2s ease;
}

.filter-btn:hover, .filter-btn.active {
  color: var(--text-primary);
}

.filter-btn.active {
  font-weight: 500;
}

.checkbox-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-main);
  font-size: 14px;
  color: var(--text-primary);
  cursor: pointer;
}

.checkbox-label input {
  display: none;
}

.custom-checkbox {
  width: 16px;
  height: 16px;
  border: 1px solid #b2b2b1;
  border-radius: 2px;
  position: relative;
}

.checkbox-label input:checked + .custom-checkbox::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 5px;
  width: 4px;
  height: 8px;
  border: solid var(--brand-green);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.color-grid {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.color-swatch {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid rgba(178, 178, 177, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.color-swatch.active {
  outline: 2px solid var(--text-primary);
  outline-offset: 2px;
}

.color-swatch:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .sidebar-filters {
    width: 100%;
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 24px;
  }
  
  .filter-group {
    min-width: 160px;
  }
}
</style>
