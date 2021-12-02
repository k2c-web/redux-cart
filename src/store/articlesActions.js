export const GET_ARTICLES = 'GET_ARTICLES'
export const FILTER_ARTICLES = 'FILTER_ARTICLES'

export const getArticles = () => {
  return (dispatch) => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_ARTICLES, payload: data })
      })
  }
}

export const filterArticles = (value) => {
  return { type: FILTER_ARTICLES, payload: value }
}
