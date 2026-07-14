export const mockOrders = [
  {
    orderId: 'order-001',
    customerName: 'Rosa',
    tableNumber: 1,
    items: [
      { itemId: 'flat-white', size: 'Large', quantity: 1, price: 5.50 },
    ],
    totalPrice: 5.50,
    status: 'confirmed',
  },
  {
    orderId: 'order-002',
    customerName: 'Tom',
    tableNumber: 2,
    items: [
      { itemId: 'espresso', size: 'Double', quantity: 2, price: 4.00 },
      { itemId: 'almond-croissant', size: 'One', quantity: 1, price: 4.00 },
    ],
    totalPrice: 12.00,
    status: 'confirmed',
  },
]
