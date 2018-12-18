const initialState = {
  loaded: false,
  logged: false,
  user: null
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_AUTHORIZED':
      return {
        logged: true,
        loaded: true,
        user: action.user
      }
    case 'USER_UNAUTHORIZED':
      return {
        logged: false,
        loaded: true,
        user: null
      }
    default:
      return state
  }
}