import { defineStore } from 'pinia'

export interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: string
  material: string
  colors: string[]
}

export interface FilterState {
  categories: string[]
  materials: string[]
  colors: string[]
}

export const useProductStore = defineStore('product', {
  state: () => ({
    activeFilters: {
      categories: [],
      materials: [],
      colors: []
    } as FilterState,
    bestsellers: [
      {
        id: 1,
        name: 'Overcoat No. 12',
        description: 'Wool & Cashmere Blend',
        price: '$495.00',
        image: 'https://www.figma.com/api/mcp/asset/17411970-f8d7-4927-b996-ca63331968a5',
        category: 'Outerwear',
        material: 'Organic Wool',
        colors: ['#323233']
      },
      {
        id: 2,
        name: 'Pleated Trouser',
        description: 'Sustainable Linen',
        price: '$220.00',
        image: 'https://www.figma.com/api/mcp/asset/14915152-bfd3-460c-953d-9f09a987c44d',
        category: 'Tailoring',
        material: 'Raw Silk',
        colors: ['#dbdad9']
      },
      {
        id: 3,
        name: 'The Sculpture Bag',
        description: 'Italian Calfskin',
        price: '$1,150.00',
        image: 'https://www.figma.com/api/mcp/asset/6bb5b6b8-196d-462b-84ba-2f14b3a81f65',
        category: 'Accessories',
        material: 'Raw Silk',
        colors: ['#323233']
      },
      {
        id: 4,
        name: 'Oxford Shirt',
        description: 'Egyptian Cotton',
        price: '$165.00',
        image: 'https://www.figma.com/api/mcp/asset/fb4ec59c-2920-49ac-89bc-eb05aec1276c',
        category: 'Tailoring',
        material: 'Organic Wool',
        colors: ['#ffffff']
      }
    ] as Product[],
    winterCollection: [
      {
        id: 101,
        name: 'Archival Overcoat',
        description: 'Double-faced Wool',
        price: '$840',
        image: 'https://www.figma.com/api/mcp/asset/33ec9443-0972-40e3-9f93-a0f852711651',
        category: 'Outerwear',
        material: 'Organic Wool',
        colors: ['#323233']
      },
      {
        id: 102,
        name: 'Knit Structure T-01',
        description: 'Loro Piana Cashmere',
        price: '$320',
        image: 'https://www.figma.com/api/mcp/asset/375aa09a-f484-4a6c-b633-b74c07304042',
        category: 'Knitwear',
        material: 'Sourced Cashmere',
        colors: ['#536254']
      },
      {
        id: 103,
        name: 'Sculptural Blouse',
        description: 'Italian Poplin',
        price: '$450',
        image: 'https://www.figma.com/api/mcp/asset/71ed09f5-fd7c-4cd6-9956-ebbdaf516ff9',
        category: 'Tailoring',
        material: 'Raw Silk',
        colors: ['#ffffff']
      },
      {
        id: 104,
        name: 'Raw Selvedge Denim',
        description: '14oz Japanese Denim',
        price: '$280',
        image: 'https://www.figma.com/api/mcp/asset/195d114f-4efa-41f1-8f6e-de428f28fb80',
        category: 'Tailoring',
        material: 'Organic Wool',
        colors: ['#323233']
      },
      {
        id: 105,
        name: 'Atelier Blazer No. 4',
        description: 'Bespoke Tailoring',
        price: '$1,100',
        image: 'https://www.figma.com/api/mcp/asset/8e1b58a9-8d27-4f6c-861a-297738a7a9de',
        category: 'Tailoring',
        material: 'Organic Wool',
        colors: ['#536254']
      },
      {
        id: 106,
        name: 'Structured Tote',
        description: 'Vegetable Tanned Leather',
        price: '$675',
        image: 'https://www.figma.com/api/mcp/asset/9e3a27da-0a49-43d1-9a7a-06da4658061d',
        category: 'Accessories',
        material: 'Raw Silk',
        colors: ['#323233']
      }
    ] as Product[]
  }),
  getters: {
    filteredProducts: (state) => {
      return state.winterCollection.filter(product => {
        const matchesCategory = state.activeFilters.categories.length === 0 || 
                               state.activeFilters.categories.includes(product.category)
        const matchesMaterial = state.activeFilters.materials.length === 0 || 
                               state.activeFilters.materials.includes(product.material)
        const matchesColor = state.activeFilters.colors.length === 0 || 
                            product.colors.some(c => state.activeFilters.colors.includes(c))
        
        return matchesCategory && matchesMaterial && matchesColor
      })
    },
    categoryCounts: (state) => {
      const counts: Record<string, number> = {}
      state.winterCollection.forEach(p => {
        counts[p.category] = (counts[p.category] || 0) + 1
      })
      return counts
    }
  },
  actions: {
    toggleCategoryFilter(category: string) {
      const index = this.activeFilters.categories.indexOf(category)
      if (index > -1) {
        this.activeFilters.categories.splice(index, 1)
      } else {
        this.activeFilters.categories.push(category)
      }
    },
    toggleMaterialFilter(material: string) {
      const index = this.activeFilters.materials.indexOf(material)
      if (index > -1) {
        this.activeFilters.materials.splice(index, 1)
      } else {
        this.activeFilters.materials.push(material)
      }
    },
    toggleColorFilter(color: string) {
      const index = this.activeFilters.colors.indexOf(color)
      if (index > -1) {
        this.activeFilters.colors.splice(index, 1)
      } else {
        this.activeFilters.colors.push(color)
      }
    },
    clearFilters() {
      this.activeFilters.categories = []
      this.activeFilters.materials = []
      this.activeFilters.colors = []
    }
  }
})
