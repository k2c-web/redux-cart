import { GET_ARTICLES } from './articlesActions'
import { FILTER_ARTICLES } from './articlesActions'
let initialState = []

export function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      initialState = action.payload
      return action.payload

    case FILTER_ARTICLES:
      return action.payload.toLowerCase() === 'all'
        ? initialState
        : initialState.filter((product) => product.category === action.payload)

    default:
      return state
  }
}
