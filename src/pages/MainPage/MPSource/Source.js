/* eslint-disable */
import React, { useState } from 'react'
import Pagination from './SPagination/Pagination'
import './index.styl'
import { useSelector } from 'react-redux'

import currentFile from './../../../modules/session/some_info'

// import tr from '../../../modules/session'
const Source = (props) => {

  // let value = useSelector(state => state.source)
  const [currentPage, setCurrentPage] = useState(1)

  const selectedWordFileName = useSelector(state => state.source.selectedWordFileName)
  const isClick = useSelector(state => state.source.isClick)
  const documentOne = currentFile[isClick] || []
  // console.log('documentOne', documentOne)
  return (
    <div className='Source-root'>
      <div className='sourse-all-text'>{documentOne.map(el =>
        <div className='source-header-and-text' key={el.id}>
          <div key={el.id} className='sourse-header'>{el.fileName}</div>
          <div className='sourse-single-text'>{el.fileText.slice(0, 500)} </div>
        </div>)}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default Source

//onClick={() => props.setCurrentSelectedId(el.id) } className='source-header-and-text'
