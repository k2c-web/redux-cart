import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { cartReducer } from './cartReducer'

const store = createStore(
  combineReducers({
    cart: cartReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
)

export default store
