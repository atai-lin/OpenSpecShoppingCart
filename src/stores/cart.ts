import { defineStore } from 'pinia'
import type { Product } from './product'

export interface CartItem extends Product {
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart-items') || '[]') as CartItem[]
  }),
  actions: {
    addItem(product: Product) {
      const existingItem = this.items.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
      this.saveToStorage()
    },
    removeItem(productId: number) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index > -1) {
        this.items.splice(index, 1)
      }
      this.saveToStorage()
    },
    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeItem(productId)
        } else {
          item.quantity = quantity
        }
      }
      this.saveToStorage()
    },
    saveToStorage() {
      localStorage.setItem('cart-items', JSON.stringify(this.items))
    }
  },
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: (state) => {
      return state.items.reduce((sum, item) => {
        const priceValue = parseFloat(item.price.replace('$', '').replace(',', ''))
        return sum + (priceValue * item.quantity)
      }, 0)
    },
    totalAmount(): number {
      const shipping = 0 // 目前設為 0
      return this.subtotal + shipping
    }
  }
})
