import { useSelector } from 'react-redux'
import { productsSelectors } from './../../store/productsSelector'

export default function Cart({ toggleCart }) {
  const products = useSelector(productsSelectors)

  return (
    !!products?.length && (
      <div className="cart-container">
        <div onClick={toggleCart} className="close">
          x
        </div>
        <div className="cart-inner">
          <table>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
            {products.map((p) => {
              return (
                <tr>
                  <td>{p.title}</td>
                  <td>{p.description}</td>
                  <td>{p.price}</td>
                  <td>{!!p.quantity ? p.quantity : 1}</td>
                  <td>x</td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    )
  )
}
