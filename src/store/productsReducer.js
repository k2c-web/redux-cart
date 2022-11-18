import { ADD_PRODUCT } from './productsActions'
import { REMOVE_PRODUCT } from './productsActions'
import { CHANGE_QUANTITY } from './productsActions'
export function productsReducer(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
      let newProduct = true
      const newArr = state.map((s) => {
        if (action.payload.id === s.id) {
          newProduct = false
          if (s.quantity) {
            ++s.quantity
          } else {
            s.quantity = 2
          }
        }
        return s
      })
      return newProduct ? [...state, action.payload] : newArr
    case REMOVE_PRODUCT:
      return state.filter((s) => s.id !== action.payload.id)
    case CHANGE_QUANTITY:
      return state.map((s) => {
        if (action.payload.id === s.id) {
          s.quantity = action.payload.quantity
        }
        return s
      })
    default:
      return state
  }
}
