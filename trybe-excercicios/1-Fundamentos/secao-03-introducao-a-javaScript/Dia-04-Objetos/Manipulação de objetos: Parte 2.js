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
  
  const customerInfo = (fullOrder) => {
    let pessoaQueEntrega = fullOrder.order.delivery.deliveryPerson
    let pessoaQueRecebe = fullOrder.name
    let numeroDeCelular = fullOrder.phoneNumber
    let rua = fullOrder.address.street
    let numeroDoPredio= fullOrder.address.number
    let numeroDoApe = fullOrder.address.apartment
    
    return `Olá, ${pessoaQueEntrega}, entrega para: ${pessoaQueRecebe}, Telefone: ${numeroDeCelular}, ${rua}, Número: ${numeroDoPredio}, AP: ${numeroDoApe}.`
  }
  console.log(customerInfo(order));
  
  const orderModifier = (fullOrder) => {
    order.name   = "Luiz Silva"
    order.payment.total = 50
    let pessoaQueRecebe = fullOrder.name
    let pizzas = Object.keys(fullOrder.order.pizza).join(", ")
    let drink = fullOrder.order.drinks.coke.type
    let valor = fullOrder.payment.total

    return `Olá, ${pessoaQueRecebe} o valor total de seu pedido de ${pizzas}, e ${drink} é R$ ${valor}.`

}
  console.log(orderModifier(order));

