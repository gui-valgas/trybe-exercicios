const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const cliente =  order.order.delivery.deliveryPerson;
  const entregaPara = order.name;
  const telefone = order.phoneNumber;
  const rua = order.address.street;
  const num = order.address.number;
  const apt = order.address.apartment;

  console.log(`Olá ${cliente}, entrega para: ${entregaPara}, Telefone: ${telefone}, R. ${rua}, Nº: ${num}, AP: ${apt}`)
};

customerInfo(order);

const orderModifier = (order) => {
  const cliente = order.name = 'Luiz Silva';
  const pedido1 = Object.keys(order.order.pizza);
  const pedido2 = order.order.drinks.coke.type;
  const totalPreço = order.payment.total = '50'
  console.log(`Olá ${cliente}, o total do seu pedido de ${pedido1} e ${pedido2} é R$${totalPreço},00.`)
};

orderModifier(order);