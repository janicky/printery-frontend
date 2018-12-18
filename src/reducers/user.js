const initialState = {
  logged: false,
  user: null
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGNED_IN':
      return {
        logged: true,
        user: action.user
      }
    default:
      return state
  }
}