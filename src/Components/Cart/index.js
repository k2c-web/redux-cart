import { useSelector } from 'react-redux'
import { removeProduct, changeQuantity } from './../../store/productsActions'
import { productsSelectors } from './../../store/productsSelector'
import { useDispatch } from 'react-redux'
import './styles.css'

export default function Cart({ toggleCart }) {
  const dispatch = useDispatch()
  const products = useSelector(productsSelectors)

  const removeFromCart = (p) => {
    dispatch(removeProduct(p))
  }
  const onQuantityChange = (e, p) => {
    const newQuantity = e.target.value
    p.quantity = newQuantity
    dispatch(changeQuantity(p.id, newQuantity))
  }
  return (
    !!products?.length && (
      <div className="cart-container">
        <div onClick={toggleCart} className="close">
          x
        </div>
        <div className="cart-inner">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => {
                return (
                  <tr key={p.id}>
                    <td>{p.title}</td>
                    <td>{p.price}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        max="5"
                        defaultValue={p.quantity}
                        onChange={(e) => onQuantityChange(e, p)}
                      />
                    </td>

                    <td>{p.price * p.quantity}</td>
                    <td>
                      <div
                        className="remove-from-cart"
                        onClick={() => removeFromCart(p)}
                      >
                        x
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  )
}
