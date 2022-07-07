export interface INewProduct {
  name: string,
  amount: string,
  orderId?: number
}

export interface IProduct extends INewProduct {
  id: number
}
