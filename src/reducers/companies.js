export const companies = (state = [], action) => {
  switch(action.type) {
    case 'SET_COMPANIES':
      return action.companies
    case 'DELETE_COMPANY':
      return state.filter(company => company.id !== action.id)
    default:
      return state
  }
}