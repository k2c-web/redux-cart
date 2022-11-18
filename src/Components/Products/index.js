import styled from '@emotion/styled'
import StoreProduct from './StoreProduct'

export default function Products ({products}) {
    return (
      !!products?.length && (
        <Style className="products-list">
          {products.map((p) => (
            <StoreProduct product={p} key={p.id} />
          ))}
        </Style>
      )
    )
  }
  

  const Style = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    display: grid;
    column-gap: 30px;
    row-gap: 30px;
    box-sizing: border-box;
    @media (min-width: 1421px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1420px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1080px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 660px) {
      grid-template-columns: repeat(1, 1fr);
    }
`

