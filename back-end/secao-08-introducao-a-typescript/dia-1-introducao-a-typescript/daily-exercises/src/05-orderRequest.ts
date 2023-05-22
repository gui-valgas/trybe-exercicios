import { Item } from './04-calculateTotalPrice';

export type OrderStatus = 'pendente' | 'enviado' | 'entregue';

export type Order = {
  id: number,
  customerName: string,
  customerEmail: string,
  items: Item[],
  status: OrderStatus,
};

export default function orderRequest(order: Order): string {
  order.items.forEach((item) => {
    if (item.product.quantity === 0) {
      throw new Error(`Desculpe, ${item.product.name} não está disponível no estoque`);
    }
  });

  return `Olá ${order.customerName}, o seu pedido de ID ${order.id} foi enviado.`;
}