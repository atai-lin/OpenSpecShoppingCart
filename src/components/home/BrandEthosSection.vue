<script setup lang="ts">
const brandEthosImg = "https://www.figma.com/api/mcp/asset/2327d4f0-6948-4d69-96b0-16973233f0cb"
</script>

<template>
  <section className="ethos-section">
    <div className="section-container">
      <div className="ethos-grid">
        <div className="ethos-image-wrapper">
          <img :src="brandEthosImg" alt="Brand Ethos" className="ethos-img" />
        </div>
        
        <div className="ethos-content">
          <div className="ethos-tag">Our Craft</div>
          <h2 className="ethos-title">
            CONSCIOUS<br />LUXURY.
          </h2>
          <div className="ethos-body">
            <p>
              We believe in the longevity of form. Our atelier focuses on sourcing only
              the finest natural fibers, working with family-run mills across Europe to
              ensure a traceably premium journey from thread to garment.
            </p>
            <p>
              Every piece is a dialogue between architectural precision and organic
              comfort, designed to be worn for decades, not seasons.
            </p>
          </div>
          <a href="#" className="ethos-link">Read Our Story</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ethos-section {
  padding: 128px 0;
  background-color: var(--bg-primary);
}

.section-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
}

.ethos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 96px;
  align-items: center;
}

.ethos-image-wrapper {
  aspect-ratio: 1/1;
  overflow: hidden;
}

.ethos-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ethos-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.ethos-tag {
  font-size: 12px;
  color: var(--brand-green);
  text-transform: uppercase;
  letter-spacing: 2.4px;
}

.ethos-title {
  font-family: var(--font-headline);
  font-size: 48px;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -2.4px;
  color: var(--text-primary);
  margin: 0;
}

.ethos-body {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 8px 0 16px;
}

.ethos-body p {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.625;
  color: rgba(50, 50, 51, 0.7);
}

.ethos-link {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.4px;
  color: var(--text-primary);
  border-bottom: 1px solid var(--text-primary);
  padding-bottom: 5px;
  align-self: flex-start;
}
</style>
