import { CartItem } from './types/CartItem';
import { Drink } from './types/Drink';
import { Food } from './types/Food';

export function first<T>(list: T[]): T {
  return list[0];
}

export function updateItem<T>(list: T[], index: number, updatedItem: T): T[] {
  if (index >= 0 && index < list.length) list.splice(index, 1, updatedItem);
  return list;
}

export function buildCartItem({ name, price }: Food | Drink, quantity: number): CartItem {
  return { name, price, quantity } as CartItem;
}