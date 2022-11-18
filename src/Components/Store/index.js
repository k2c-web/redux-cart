
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { articlesSelectors } from '../../store/articlesSelectors'
import Products from '../Products'
import Cart from '../Cart'
import Header from '../Header'

const isCart = document.location.pathname=== "/cart"


export default function Store() {
  const articles = useSelector(articlesSelectors)
  const [showCart, setShowCart] = useState(false)
  const toggleCart = () => setShowCart(!showCart)
  return (
    <>
      <Header toggleCart={toggleCart} showCart={showCart}/>
      <Style>
        <Products products={articles}/>
        {showCart && <Cart toggleCart={toggleCart} />}
      </Style>
    </>
  )
}

const Style = styled.div`
  position:relative;
  padding: 0 5%;
  margin-top: 40px;
`

