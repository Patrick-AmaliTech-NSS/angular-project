export type ProductId = string | number

export interface IProduct {
  id: ProductId
  label: string
  imageUrl: string
  price: number
}