<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopNavBar from './components/layout/TopNavBar.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<template>
  <div class="app-wrapper">
    <TopNavBar />
    
    <main class="main-content">
      <RouterView />
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
