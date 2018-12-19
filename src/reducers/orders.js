export const orders = (state = [], action) => {
  switch(action.type) {
    case 'SET_ORDERS':
      return action.orders;
    case 'DETELE_ORDER':
      return state.filter(order => order.id !== action.id)
    default:
      return state     
  }
}