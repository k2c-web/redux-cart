import { useState } from 'react'
import { useSelector } from 'react-redux'
import { articlesSelectors } from '../../store/articlesSelectors'
import StoreProduct from '../StoreProduct'
import Cart from '../Cart'

export default function Store() {
  const products = useSelector(articlesSelectors)
  const [showCart, setShowCart] = useState(false)
  const toggleCart = () => setShowCart(!showCart)
  return (
    <>
      <header>
        <h1>Redux Boutique</h1>
        <button onClick={toggleCart}>Show cart</button>
      </header>
      <div className="store-container">
        {!!products?.length && (
          <ul className="products-list">
            {products.map((p) => (
              <StoreProduct product={p} />
            ))}
          </ul>
        )}
        {showCart && <Cart toggleCart={toggleCart} />}
      </div>
    </>
  )
}
