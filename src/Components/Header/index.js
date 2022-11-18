//import Select from '../Select'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { productsSelectors } from './../../store/productsSelector'

export default function Header({showCart, toggleCart}) {
  const products = useSelector(productsSelectors)
  return (
    <Root>
      <h1>React & Redux Boutique</h1>
      <button onClick={toggleCart}>{!!showCart ? "View products" : `View Cart (${products.length})`}</button>
    </Root>
  )
}

const Root = styled.header`
  box-sizing:border-box;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: indigo;
  color: lavender;
  box-shadow: 0px 3px 30px 20px lavenderblush;
`