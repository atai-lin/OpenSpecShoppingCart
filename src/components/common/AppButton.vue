<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  type?: 'button' | 'submit' | 'reset'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button'
})
</script>

<template>
  <button :type="type" :class="['app-button', `variant-${variant}`]">
    <slot />
  </button>
</template>

<style scoped>
.app-button {
  padding: 16px 40px;
  border-radius: 2px;
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-family: var(--font-main);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.variant-primary {
  background-color: var(--brand-green);
  color: var(--brand-green-light);
  box-shadow: 0px 10px 15px -3px rgba(83, 98, 84, 0.1), 0px 4px 6px -4px rgba(83, 98, 84, 0.1);
}

.variant-primary:hover {
  filter: brightness(1.1);
}

.variant-secondary {
  background-color: var(--bg-button-gray);
  color: var(--text-primary);
}

.variant-secondary:hover {
  background-color: #d1d1d1;
}

.variant-outline {
  border-bottom: 1px solid var(--text-primary);
  padding: 0 0 5px 0;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1.2px;
}
</style>
