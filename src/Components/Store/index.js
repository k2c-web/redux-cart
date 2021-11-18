import { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadProductsAction } from '../../store/cartActions'
import { cartSelectors } from '../../store/cartSelectors'

function StoreProduct({ item }) {
  return <li>{item.title}</li>
}

export default function Store() {
  const dispatch = useDispatch()
  const fetchData = useCallback(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        dispatch(loadProductsAction(json))
      })
  }, [dispatch])

  //const [products, setProducts] = useState()
  const products = useSelector(cartSelectors)
  console.log(useSelector(cartSelectors))
  useEffect(() => {
    fetchData()
  }, [fetchData])
  return (
    !!products?.length && (
      <ul>
        {products.map((p) => (
          <StoreProduct item={p} />
        ))}
      </ul>
    )
  )

  //<h1>{JSON.stringify(products)}</h1>
}
