export const setOrders = (orders) => ({
  type: 'SET_ORDERS',
  orders
})

export const deleteOrder = (id) => ({
  type: 'DELETE_ORDER',
  id
})