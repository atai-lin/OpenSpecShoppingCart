<template>
  <section class="collection-hero">
    <div class="hero-container">
      <div class="hero-content">
        <span class="subtitle">Seasonal Edit</span>
        <h1 class="title">
          <span>The Winter</span>
          <span>Collection</span>
        </h1>
      </div>
      
      <div class="hero-controls">
        <div class="control-group">
          <button class="control-btn">
            Filters
            <span class="icon">▼</span>
          </button>
          <button class="control-btn">
            Sort
            <span class="icon">▼</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.collection-hero {
  padding: 128px 32px 80px;
  background-color: var(--bg-primary);
}

.hero-container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 672px;
}

.subtitle {
  font-family: var(--font-main);
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.title {
  font-family: var(--font-headline);
  font-weight: 800;
  font-size: 96px;
  line-height: 1;
  letter-spacing: -2.88px;
  text-transform: uppercase;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
}

.hero-controls {
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(178, 178, 177, 0.3);
}

.control-group {
  display: flex;
  gap: 48px;
}

.control-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-main);
  font-size: 12px;
  letter-spacing: 1.2px;
  color: var(--text-primary);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.icon {
  font-size: 10px;
}

@media (max-width: 1024px) {
  .title {
    font-size: 64px;
  }
}

@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
  }
  
  .title {
    font-size: 48px;
  }
  
  .hero-controls {
    width: 100%;
  }
  
  .control-group {
    justify-content: space-between;
  }
}
</style>
