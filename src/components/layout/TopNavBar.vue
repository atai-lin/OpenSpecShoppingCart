<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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
    <div className="nav-container">
      <div className="nav-left">
        <a href="/" className="logo">ATELIER</a>
        <div className="nav-links">
          <a href="#" className="nav-link">Collections</a>
          <a href="#" className="nav-link">New Arrivals</a>
          <a href="#" className="nav-link">Archive</a>
          <a href="#" className="nav-link">About</a>
        </div>
      </div>
      <div className="nav-right">
        <button className="icon-btn">
          <!-- Simplified icon representation -->
          <span className="icon">🛒</span>
        </button>
        <button className="icon-btn">
          <span className="icon">👤</span>
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
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-right {
  display: flex;
  gap: 24px;
  align-items: center;
}

.icon-btn {
  font-size: 18px;
  color: var(--text-primary);
}
</style>
