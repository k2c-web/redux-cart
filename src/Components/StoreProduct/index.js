import { addProduct } from './../../store/productsActions'
import { useDispatch } from 'react-redux'

function StoreProduct({ product }) {
  const dispatch = useDispatch()

  return (
    <div className="product-box">
      <div className="product-category">{product.category}</div>
      <div className="product-title">{product.title}</div>
      <div className="product-image">
        <img src={product.image} alt={product.title}></img>
      </div>
      <div className="product-add_TO_CART">
        <button onClick={() => dispatch(addProduct(product))}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default StoreProduct
