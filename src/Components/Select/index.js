import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { articlesSelectors } from '../../store/articlesSelectors'
import { filterArticles } from '../../store/articlesActions'

import './styles.css'

import { useDispatch } from 'react-redux'
export default function Select() {
  const dispatch = useDispatch()
  const selectRef = useRef()
  const products = useSelector(articlesSelectors)

  const filters = useRef()
  const unique = [...new Set(products.map((product) => product.category))]
  filters.current = unique
  const onSelectChange = () => {
    if (selectRef.current) {
      console.log(selectRef.current.value)

      dispatch(filterArticles(selectRef.current.value))
    }
  }

  return (
    !!filters?.current?.length && (
      <select ref={selectRef} onChange={onSelectChange}>
        <option value={'all'}>All</option>
        {filters.current.map((filter) => {
          return (
            <option key={filter} value={filter}>
              {filter}
            </option>
          )
        })}
      </select>
    )
  )
}
