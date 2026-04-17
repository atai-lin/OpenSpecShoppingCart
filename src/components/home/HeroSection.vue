<script setup lang="ts">
import AppButton from '../common/AppButton.vue'

const heroImg = "https://www.figma.com/api/mcp/asset/029f90fd-37eb-49e1-81b8-c5a7d856c90b"
</script>

<template>
  <section className="hero-section">
    <div className="hero-bg">
      <img :src="heroImg" alt="Hero background" className="hero-img" />
      <div className="hero-overlay"></div>
    </div>
    
    <div className="hero-content">
      <div className="hero-tagline">Autumn / Winter 2024</div>
      <h1 className="hero-title">
        THE NEW<br />STANDARD.
      </h1>
      <p className="hero-description">
        A curated exploration of form, texture, and<br />
        botanical tones. Designed for the modern<br />
        observer.
      </p>
      <div className="hero-actions">
        <AppButton variant="primary">Shop Now</AppButton>
        <AppButton variant="secondary">View Lookbook</AppButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  height: 921px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 80px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  mix-blend-mode: saturation;
}

.hero-content {
  max-width: 672px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero-tagline {
  font-size: 12px;
  color: var(--text-secondary);
  letter-spacing: 2.4px;
  text-transform: uppercase;
}

.hero-title {
  font-family: var(--font-headline);
  font-weight: 800;
  font-size: 96px;
  line-height: 1;
  letter-spacing: -4.8px;
  color: var(--text-primary);
  margin: 0;
}

.hero-description {
  font-size: 18px;
  color: var(--text-tertiary);
  line-height: 1.6;
  margin-top: 16px;
  max-width: 448px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}
</style>
