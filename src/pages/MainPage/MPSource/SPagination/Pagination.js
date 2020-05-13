import React from 'react'
import './index.styl'
import { Pagination } from 'antd'

const PaginationFunc = ({ currentPage, setCurrentPage }) => {
  return (
    <div className='Pagination-root'>
      <Pagination defaultCurrent={currentPage} onChange={setCurrentPage} total={20} defaultPageSize={4} />
    </div>
  )
}

export default PaginationFunc
