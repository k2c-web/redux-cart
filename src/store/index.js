import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getArticles } from './../store/articlesActions'
import { articlesReducer } from './articlesReducer'
import { productsReducer } from './productsReducer'

const store = createStore(
  combineReducers({
    articles: articlesReducer,
    products: productsReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
)

store.dispatch(getArticles())

export default store
