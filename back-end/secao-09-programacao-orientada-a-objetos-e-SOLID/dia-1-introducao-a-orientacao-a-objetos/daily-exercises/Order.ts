import Client from "./Client";
import OrderItem from "./OrderItem";

export default class Order {
  private _client: Client ;
  private _items: OrderItem[] = [];
  private _metodoDePagamento: string;  
  private _desconto: number;

  constructor(
    client: Client,
    items: OrderItem[],
    metodoDePagamento: string,
    desconto: number,
  ) {
    this._client = client;
    this._items = items;
    this._metodoDePagamento = metodoDePagamento;
    this._desconto = desconto;
  }

  get client(): Client {
    return this._client;
  }
  set client(value: Client) {
    this._client = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }
  set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }
    this._items = value;
  }

  get paymentMethod(): string {
    return this._metodoDePagamento;
  }

  set paymentMethod(value: string) {
    this._metodoDePagamento = value;
  }
  get discount(): number {
    return this._desconto;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }
    this._desconto = value;
  }

  somaTotal(): number {
    return this.items
      .reduce((prevValue, item) => {
        const total = prevValue + item.price;

        return total;
      }, 0);
  }

  somaTotalComDesconto(): number {
    return this.somaTotal() * (1 - this.discount);
  }
}

// testes
const client = new Client('João');

const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.somaTotal());
console.log('Valor com desconto: ', order.somaTotalComDesconto());
