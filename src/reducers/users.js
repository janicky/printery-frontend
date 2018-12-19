export const users = (state = [], action) => {
  switch(action.type) {
    case 'SET_USERS':
      return action.users;
    case 'DELETE_USER':
      return state.filter(user => user.id !== action.id)
    default:
      return state;
  }
}