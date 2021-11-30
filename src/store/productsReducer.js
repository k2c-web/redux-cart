import { ADD_PRODUCT } from './productsActions'

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

    default:
      return state
  }
}
