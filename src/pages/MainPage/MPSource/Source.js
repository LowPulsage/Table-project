/* eslint-disable */
import React, { useState } from 'react'
import './index.styl'
import { useSelector } from 'react-redux'
import { List } from 'antd'
import currentFile from './../../../modules/session/some_info'

const Source = (props) => {

  // let value = useSelector(state => state.source)
  const [currentPage, setCurrentPage] = useState(1)

  const selectedWordFileName = useSelector(state => state.source.selectedWordFileName)
  const isClick = useSelector(state => state.source.isClick)
  const documentOne = currentFile[isClick] || []
  return (
    <div className='Source-root'>
      <div className='sourse-all-text'>
        <List
          itemLayout="horizontal"
          dataSource={documentOne}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={<div>{item.fileName}</div>}
                description={item.fileText}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default Source
