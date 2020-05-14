/* eslint-disable */
import React, { useState } from 'react'
import Pagination from './SPagination/Pagination'
import './index.styl'
import { useSelector } from 'react-redux'

const Source = (props) => {
  let value = useSelector(state => state.source)
  const [currentPage, setCurrentPage] = useState(1)

  let [activeMode, setActiveMode] = useState(false);

  const activateEditMode = () => {
    setActiveMode(true);
  }

  return (
    <div className='Source-root'>
      <div className='sourse-all-text'>{value.sourceData.map(el =>
        <div className='source-header-and-text' key={el.id}>
          <div key={el.id} className='sourse-header'>{el.fileName}</div>
          <div className='sourse-single-text'>{el.message} </div>
        </div>)}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default Source

//onClick={() => props.setCurrentSelectedId(el.id) } className='source-header-and-text'
