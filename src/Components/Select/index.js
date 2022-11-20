import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { articlesSelectors } from '../../store/articlesSelectors'
import { filterArticles } from '../../store/articlesActions'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'

export default function Select() {
  const [filters, setFilters] = useState(null)
  const dispatch = useDispatch()
  const selectRef = useRef()
  const products = useSelector(articlesSelectors)
  
  useEffect(() => {
    if(products.length > 0 && !filters) {
      const unique = [...new Set(products.map((product) => product.category))]
      setFilters(unique)
    }
  }, [products, filters])

  //const filters = useRef()
  const onSelectChange = () => {
    if (selectRef.current) {
      dispatch(filterArticles(selectRef.current.value))
    }
  }

  return !!filters ? (
      <Root>
        <select ref={selectRef} onChange={onSelectChange}>
          <option value={'all'}>All</option>
          {filters?.map((filter) => {
            return (
              <option key={filter} value={filter}>
                {filter}
              </option>
            )
          })}
        </select>
      </Root>
  ) : null
}


const Root = styled.div`
margin-top: 20px;
  select {
    font-size: 16px;
    color: var(--primary-color);
    width: 50%;
    height: 34px;
    display: block;
    margin: 0 auto;
    border: var(--items-border)
  }
`