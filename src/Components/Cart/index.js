import { useSelector } from 'react-redux'
import { removeProduct, changeQuantity } from './../../store/productsActions'
import { productsSelectors } from './../../store/productsSelector'
import { useDispatch } from 'react-redux'
import './styles.css'

export default function Cart() {
    const dispatch = useDispatch()
    const products = useSelector(productsSelectors)

    const removeFromCart = (p) => dispatch(removeProduct(p))

    const onQuantityChange = (e, p) => {
      const newQuantity = e.target.value
      p.quantity = newQuantity
      dispatch(changeQuantity(p.id, newQuantity))
    }
  
    const sum = products.reduce((prev, cur) => {
      return prev + (cur.price * cur.quantity)
    }, 0)

  return (
      <div className="cart-container">
        <div className="cart-inner">
          {products.length > 0 ?
          <table>
            <thead>
              <tr>
                <th>Title</th>
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
                    <td className="change-quantity">
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
              
            <tr><td className='total-price' colSpan="4">Prix total : {sum}</td></tr>
            </tbody>
          </table>
          : <h1>Empty Cart</h1>}
        </div>
      </div>
  )
}
