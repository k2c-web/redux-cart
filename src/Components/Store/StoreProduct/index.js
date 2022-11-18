import { useRef } from 'react'
import { addProduct } from '../../../store/productsActions'
import { useDispatch } from 'react-redux'
import './styles.css'

function StoreProduct({ product }) {
  const dispatch = useDispatch()
  const quantityRef = useRef()

  const addToCart = () => {
    const quantity = quantityRef.current.value
    const newProduct = { ...product, quantity }
    dispatch(addProduct(newProduct))
  }

  return (
    <div className="product-box">
      <div className="product-category">{product.category}</div>
      <div className="product-title">{product.title}</div>
      <div className="product-image">
        <img src={product.image} alt={product.title}></img>
      </div>
      <div className="product-action">
        <button onClick={() => addToCart(product)}>Add To Cart</button>
        <label htmlFor="quantity">
          Quantity
          <input
            type="number"
            id="quantity"
            min="1"
            max="5"
            defaultValue="1"
            ref={quantityRef}
          />
        </label>
      </div>
    </div>
  )
}

export default StoreProduct
