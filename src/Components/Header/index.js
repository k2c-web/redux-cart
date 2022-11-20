//import Select from '../Select'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { productsSelectors } from './../../store/productsSelector'

export default function Header({showCart, toggleCart}) {
  const products = useSelector(productsSelectors)

  const quantity = products.reduce((prev, cur) => {
    return parseInt(prev, 10) + parseInt(cur.quantity, 10)
  }, 0)

  return (
    <Root>
      <h1>R-Shop</h1>
      <button onClick={toggleCart}>{!!showCart ? "View products" : `View Cart (${quantity})`}</button>
    </Root>
  )
}

const Root = styled.header`
  box-sizing:border-box;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: indigo;
  color: lavender;
  box-shadow: 0px 3px 30px 20px lavenderblush;

  button {
    font-size:16px;
    border-radius: 5px;
    background; white;
    padding: 12px 20px;
    border:none;
    box-shadow: 7px 5px 100px 10px lavenderblush;
  }
`