import { defineStore } from 'pinia'

export interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
}

export const useProductStore = defineStore('product', {
  state: () => ({
    bestsellers: [
      {
        id: 1,
        name: 'Overcoat No. 12',
        description: 'Wool & Cashmere Blend',
        price: '$495.00',
        image: 'https://www.figma.com/api/mcp/asset/17411970-f8d7-4927-b996-ca63331968a5'
      },
      {
        id: 2,
        name: 'Pleated Trouser',
        description: 'Sustainable Linen',
        price: '$220.00',
        image: 'https://www.figma.com/api/mcp/asset/14915152-bfd3-460c-953d-9f09a987c44d'
      },
      {
        id: 3,
        name: 'The Sculpture Bag',
        description: 'Italian Calfskin',
        price: '$1,150.00',
        image: 'https://www.figma.com/api/mcp/asset/6bb5b6b8-196d-462b-84ba-2f14b3a81f65'
      },
      {
        id: 4,
        name: 'Oxford Shirt',
        description: 'Egyptian Cotton',
        price: '$165.00',
        image: 'https://www.figma.com/api/mcp/asset/fb4ec59c-2920-49ac-89bc-eb05aec1276c'
      }
    ] as Product[]
  }),
  actions: {
    // Future actions like addToCart can be added here
  }
})
