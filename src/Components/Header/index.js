
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
  padding: var(--main-horizontal-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--primary-color);
  color: var(--secondary-color);

  h1 {
    color: inherit;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  button {
    font-size:16px;
    border-radius: 5px;
    background: var(--secondary-color);
    padding: 12px 20px;
    border:none;
    text-transform: lowercase;
    font-variant: small-caps;
    box-shadow: 7px 5px 100px 10px var(--secondary-color);
  }
`