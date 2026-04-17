<script setup lang="ts">
const imgNewArrivals = "https://www.figma.com/api/mcp/asset/af16e994-7deb-4559-a067-8f5e40ca282f"
const imgTrending = "https://www.figma.com/api/mcp/asset/d578518e-4061-47d0-a633-25ebfd8ed680"
const imgArchive = "https://www.figma.com/api/mcp/asset/219adffb-6b98-45fa-a7f0-416c0f6ea95d"
</script>

<template>
  <section className="category-section">
    <div className="bento-grid">
      <!-- New Arrivals (Span 8) -->
      <div className="bento-item main-item">
        <img :src="imgNewArrivals" alt="New Arrivals" className="bento-img" />
        <div className="bento-overlay"></div>
        <div className="bento-content">
          <h2 className="bento-title">New Arrivals</h2>
          <a href="#" className="bento-link">Explore Collection</a>
        </div>
      </div>
      
      <!-- Right Column (Span 4) -->
      <div className="side-column">
        <div className="bento-item side-item trending">
          <img :src="imgTrending" alt="Trending" className="bento-img" />
          <div className="bento-overlay-light"></div>
          <div className="bento-content">
            <h3 className="bento-subtitle">Trending</h3>
          </div>
        </div>
        
        <div className="bento-item side-item archive">
          <img :src="imgArchive" alt="Archive" className="bento-img" />
          <div className="bento-overlay-light"></div>
          <div className="bento-content">
            <h3 className="bento-subtitle">The Archive</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.category-section {
  padding: 96px 32px;
  max-width: 1440px;
  margin: 0 auto;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  height: 800px;
}

.main-item {
  grid-column: span 8;
  position: relative;
  overflow: hidden;
}

.side-column {
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.side-item {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.bento-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.bento-item:hover .bento-img {
  transform: scale(1.05);
}

.bento-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(50, 50, 51, 0.4), transparent);
}

.bento-overlay-light {
  position: absolute;
  inset: 0;
  background-color: rgba(50, 50, 51, 0.1);
}

.archive .bento-overlay-light {
  background-color: rgba(50, 50, 51, 0.2);
}

.bento-content {
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: var(--text-primary);
}

.side-item .bento-content {
  bottom: 32px;
  left: 32px;
}

.bento-title {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.9px;
  margin-bottom: 8px;
}

.bento-subtitle {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.6px;
}

.bento-link {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  border-bottom: 1px solid var(--text-primary);
  padding-bottom: 5px;
}
</style>
