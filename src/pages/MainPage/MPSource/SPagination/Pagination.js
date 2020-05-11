import React from 'react'
import './index.styl'
import { Pagination } from 'antd'

const PaginationFunc = () => {
  return (
    <div className='Pagination-root'>
      <Pagination defaultCurrent={1} total={25} defaultPageSize={5} />
    </div>
  )
}

export default PaginationFunc
