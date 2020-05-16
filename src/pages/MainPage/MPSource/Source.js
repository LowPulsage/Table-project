import currentFile from './../../../modules/session/some_info'
import { useSelector } from 'react-redux'
import React, { useState } from 'react'
import { List } from 'antd'
import './index.styl'

const Source = () => {
  const fragmentForSearching = useSelector(state => state.source.fragmentForSearching)
  const documentOne = currentFile[fragmentForSearching] || []

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
