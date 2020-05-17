import { setSelectedWordName, setSelectedExelName } from 'modules/session/session-reducers'
import { useSelector, useDispatch } from 'react-redux'
import docxIcon from './hotpng.com.png'
import { List, Avatar } from 'antd'
import exelIcon from './exel.png'
import React from 'react'
import './index.styl'

const FSDocumentsList = () => {
  const dispatch = useDispatch()
  const source = useSelector(state => state.source)

  return (
    <div className='MainPage-documentList'>
      <List
        renderItem={item => (
          <List.Item onClick={() => dispatch(setSelectedWordName(item.fileName))}>
            <List.Item.Meta
              className={`documentList-fileName ${source.selectedWordFileName === item.fileName ? 'selected' : ''}`}
              avatar={<Avatar src={docxIcon} />}
              title={<div>{item.fileName}</div>}
            />
          </List.Item>
        )}
        dataSource={source.docxFileNames}
        className='list'
        size='small'
        bordered
      />
      <List
        renderItem={item => (
          <List.Item onClick={() => dispatch(setSelectedExelName(item.fileName))}>
            <List.Item.Meta
              className={`documentList-fileName ${source.selectedExcelFileName === item.fileName ? 'selected' : ''}`}
              avatar={<Avatar src={exelIcon} />}
              title={<div>{item.fileName}</div>}
            />
          </List.Item>
        )}
        dataSource={source.excelFileNames}
        className='list'
        size='small'
        bordered
      />
    </div>
  )
}

export default FSDocumentsList
