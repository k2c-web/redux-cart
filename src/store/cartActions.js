import { LOAD_PRODUCTS_ACTION } from './cartReducer'

export const loadProductsAction = (products) => async (dispatch) =>
  dispatch({
    type: LOAD_PRODUCTS_ACTION,
    payload: products,
  })
