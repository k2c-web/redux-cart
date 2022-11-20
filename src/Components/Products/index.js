import { useState } from 'react'
import { useSelector } from 'react-redux'
import { articlesSelectors } from '../../store/articlesSelectors'
import styled from '@emotion/styled'
import StoreProduct from './StoreProduct'

const DISPLAY_MAX_NB = 9

export default function Products ({products}) {

    const articles = useSelector(articlesSelectors)

    const [visible, setVisible] = useState(DISPLAY_MAX_NB)

    const handleOnLoadMoreButtonClick = () => setVisible(visible + DISPLAY_MAX_NB)

    const itemsToBeRendered = articles?.slice(0, visible)
  
    return (
      !!itemsToBeRendered?.length && (
        <Grid>
          {itemsToBeRendered.map((p) => (
            <StoreProduct product={p} key={p.id} />
          ))}
        {visible < articles?.length && (
          <LoadMore>
            <button onClick={handleOnLoadMoreButtonClick}>Load More</button>
          </LoadMore>
        )}
        </Grid>
      )
    )
  }
  

  const Grid = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0 0 50px 0;
    display: grid;
    column-gap: 30px;
    row-gap: 30px;
    box-sizing: border-box;

    @media (min-width: 1421px) {
      grid-template-columns: repeat(3, 1fr);
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

export const LoadMore = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  grid-column: 1 / span 3;
      
  @media (min-width: 1421px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1420px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1080px) {
    grid-column: 1 / span 2;
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column: 1 / span 1;
  }

  button {
    cursor: pointer;
    font-size: 18px;
    text-transform: lowercase;
    font-variant: small-caps;
    border-radius: 5px;
    background: var(--primary-color);
    color: var(--secondary-color);
    padding: 12px 40px;
    border:none;
    margin-top: 20px;
  }
`

