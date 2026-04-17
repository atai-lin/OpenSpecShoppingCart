<script setup lang="ts">
</script>

<template>
  <footer className="app-footer">
    <div className="footer-container">
      <div className="footer-columns">
        <div className="footer-col">
          <div className="footer-logo">ATELIER</div>
          <p className="footer-desc">Elevating the essentials since 2014.</p>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Shop</h4>
          <ul className="footer-links">
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Support</h4>
          <ul className="footer-links">
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Follow</h4>
          <ul className="footer-links">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">© 2024 ATELIER. ALL RIGHTS RESERVED.</div>
        <div className="built-with">Built with Intention</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: var(--bg-primary);
  padding: 80px 0 40px;
}

.footer-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  margin-bottom: 80px;
}

.footer-logo {
  font-family: var(--font-main);
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 24px;
}

.footer-desc {
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.5;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.footer-title {
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin-bottom: 24px;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-links a {
  font-size: 12px;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1.2px;
}

.footer-links a:hover {
  color: var(--text-primary);
}

.footer-bottom {
  border-top: 1px solid rgba(50, 50, 51, 0.05);
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  font-size: 12px;
  color: var(--text-secondary);
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.built-with {
  font-size: 10px;
  color: rgba(50, 50, 51, 0.3);
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>
