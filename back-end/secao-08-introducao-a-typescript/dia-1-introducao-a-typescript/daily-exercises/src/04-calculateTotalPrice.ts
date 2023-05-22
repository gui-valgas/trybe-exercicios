import { Product } from './02-insertProducts';

export type Item = {
  product: Product,
  quantity: number,
  phrase: string,
  brand: string,
};

export default function calculateTotalPrice(items: Item[]): number {
  const total = items.reduce((acc, curr) => (acc + curr.product.price * curr.quantity), 0);
  return +(total.toFixed(2));
}
