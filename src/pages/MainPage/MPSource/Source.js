/* eslint-disable */
import React from 'react'
import Pagination from './SPagination/Pagination'
import './index.styl'
import { useSelector } from 'react-redux'

const Source = () => { 
  let value = useSelector(state => state.source)

  return (
    <div className='Source-root'>
      <div className='sourse-all-text'>{value.sourceData.map(el =>
        <div key={el.id} className='sourse-header-text'>
          <div className='sourse-single-text'>{el.message}
          </div>
        </div>)}
      </div>
      <Pagination />
    </div>
  )
}

export default Source
