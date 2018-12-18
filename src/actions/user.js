export const userAuthorized = (user) => ({
  type: 'USER_AUTHORIZED',
  user
})

export const userUnauthorized = () => ({
  type: 'USER_UNAUTHORIZED'
})