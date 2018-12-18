export const userAuthorized = (user) => ({
  type: 'USER_AUTHORIZED',
  user
})

export const userUnauthorized = () => ({
  type: 'USER_UNAUTHORIZED'
})

export const userSignedIn = (user) => ({
  type: 'USER_SIGNED_IN',
  user
})