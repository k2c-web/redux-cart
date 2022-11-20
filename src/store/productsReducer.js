import { ADD_PRODUCT } from './productsActions'
import { REMOVE_PRODUCT } from './productsActions'
import { CHANGE_QUANTITY } from './productsActions'

const initialState = JSON.parse(localStorage.getItem('redux-cart')) || []

const store = (newState) => {
  const lsString = JSON.stringify(newState)
  localStorage.setItem('redux-cart', lsString)
  return newState
} 

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      let newProduct = true
      const newArr = state.map((s) => {
        if (action.payload.id === s.id) {
          newProduct = false
          s.quantity = parseInt(action.payload.quantity, 10) + parseInt(s.quantity, 10)
        }
        return s
      })
      const newState = newProduct ? [...state, action.payload] : newArr
      return store(newState)
    case REMOVE_PRODUCT:
      const rmvState = state.filter((s) => s.id !== action.payload.id)
      return store(rmvState)
    case CHANGE_QUANTITY:
      const changeState = state.map((s) => {
        if (action.payload.id === s.id) {
          s.quantity = action.payload.quantity
        }
        return s
      })
      return store(changeState)
    default:
      return state
  }
}
