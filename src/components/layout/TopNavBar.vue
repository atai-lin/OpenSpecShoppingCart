<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav :class="['top-nav', { 'is-scrolled': isScrolled }]">
    <div class="nav-container">
      <div class="nav-left">
        <router-link to="/" class="logo">ATELIER</router-link>
        <div class="nav-links">
          <router-link to="/collections/winter" class="nav-link">Collections</router-link>
          <router-link to="/" class="nav-link">New Arrivals</router-link>
          <router-link to="/" class="nav-link">Archive</router-link>
          <router-link to="/" class="nav-link">About</router-link>
        </div>
      </div>
      <div class="nav-right">
        <button class="icon-btn">
          <!-- Simplified icon representation -->
          <span class="icon">🛒</span>
        </button>
        <button class="icon-btn">
          <span class="icon">👤</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--nav-blur-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s ease;
}

.nav-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 48px;
}

.logo {
  font-family: var(--font-main);
  font-weight: 600;
  font-size: 24px;
  letter-spacing: -0.48px;
  color: var(--text-primary);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-link {
  font-size: 16px;
  color: var(--text-tertiary);
  letter-spacing: -0.8px;
  text-transform: uppercase;
  transition: color 0.2s ease;
  text-decoration: none;
}

.nav-link:hover, .nav-link.router-link-active {
  color: var(--text-primary);
}

.nav-link.router-link-active {
  border-bottom: 1px solid var(--brand-green);
  padding-bottom: 4px;
}

.nav-right {
  display: flex;
  gap: 24px;
  align-items: center;
}

.icon-btn {
  font-size: 18px;
  color: var(--text-primary);
  background: none;
  border: none;
  cursor: pointer;
}
</style>
