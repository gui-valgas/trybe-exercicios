import { Product } from './02-insertProducts';

const products: Product[] = [
  {
    id: 1,
    name: 'Camiseta',
    price: 29.9,
    quantity: 3,
    brands: ['Nike', 'Reebok'],
  },
  {
    id: 2,
    name: 'Caneca',
    price: 19.90,
    quantity: 12,
    brands: ['Stanley', 'Camelbak'],
  },
  {
    id: 3,
    name: 'Boné',
    price: 39.90,
    quantity: 0,
    brands: [],
  },
];

export default function findById(id: number): Product | string {
  const product = products.find((prod) => prod.id === id);

  if (product) return product;

  return `Produto com ID ${id} não encontrado.`;
}
