<script setup lang="ts">
import TopNavBar from './components/layout/TopNavBar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/home/HeroSection.vue'
import CategoryBentoGrid from './components/home/CategoryBentoGrid.vue'
import BestsellersSection from './components/home/BestsellersSection.vue'
import BrandEthosSection from './components/home/BrandEthosSection.vue'
</script>

<template>
  <div className="app-wrapper">
    <TopNavBar />
    
    <main className="main-content">
      <HeroSection />
      <CategoryBentoGrid />
      <BestsellersSection />
      <BrandEthosSection />
    </main>
    
    <AppFooter />
  </div>
</template>

<style>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding-top: 80px; /* Offset for sticky header */
}
</style>
