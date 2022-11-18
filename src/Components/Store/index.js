import { useState } from 'react'
import { useSelector } from 'react-redux'
import { articlesSelectors } from '../../store/articlesSelectors'
import StoreProduct from './StoreProduct'
import Cart from '../Cart'
import Header from '../Header'
import './styles.css'

export default function Store() {
  const products = useSelector(articlesSelectors)
  const [showCart, setShowCart] = useState(false)
  const toggleCart = () => setShowCart(!showCart)
  return (
    <>
      <Header toggleCart={toggleCart} />
      <div className="store-container">
        {!!products?.length && (
          <ul className="products-list">
            {products.map((p) => (
              <StoreProduct product={p} key={p.id} />
            ))}
          </ul>
        )}
        {showCart && <Cart toggleCart={toggleCart} />}
      </div>
    </>
  )
}
