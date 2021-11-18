export const LOAD_PRODUCTS_ACTION = 'LOAD_PRODUCTS_ACTION'

export function cartReducer(state = [], action) {
  switch (action.type) {
    case LOAD_PRODUCTS_ACTION:
      return action.payload
    default:
      return state
  }
}
