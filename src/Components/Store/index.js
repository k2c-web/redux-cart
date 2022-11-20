
import styled from '@emotion/styled'
import { useState } from 'react'
import Products from '../Products'
import Cart from '../Cart'
import Header from '../Header'

export default function Store() {
  
  const [showCart, setShowCart] = useState(false)
  const toggleCart = () => setShowCart(!showCart)
  
  return (
    <>
      <Header toggleCart={toggleCart} showCart={showCart}/>
      <Style>
        <Products/>
        {showCart && <Cart toggleCart={toggleCart} />}
      </Style>
    </>
  )
}

const Style = styled.div`
  position:relative;
  padding: var(--main-horizontal-padding);
  margin-top: 40px;
`

