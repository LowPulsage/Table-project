/*eslint-disable */
import React from 'react'
import { List, Avatar } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import docxIcon from './hotpng.com.png'
import exelIcon from './exel.png'
import './index.styl'
import { setSelectedWordName, setSelectedExelName } from '../../../modules/session/session-reducers'

const DocumentsList = (props) => {
  const dispatch = useDispatch()
  const source = useSelector(state => state.source)

  return (
    <div className='MainPage-documentList'>
      <List size="small"
        className="list"
        bordered
        dataSource={source.docxFileNames}
        renderItem={item => <List.Item onClick={() => dispatch(setSelectedWordName(item.fileName))}>
          <List.Item.Meta className={`documentList-fileName ${source.selectedWordFileName === item.fileName ? 'selected' : ''}`}
            avatar={<Avatar src={docxIcon} />}
            title={<div>{item.fileName}</div>}
          />
        </List.Item>} />
      <List size="small"
        className="list"
        bordered
        dataSource={source.excelFileNames}
        renderItem={item => <List.Item onClick={() => dispatch(setSelectedExelName(item.fileName))}>
          <List.Item.Meta className={`documentList-fileName ${source.selectedExcelFileName === item.fileName ? 'selected' : ''}`}
            avatar={<Avatar src={exelIcon} />}
            title={<div>{item.fileName}</div>}
          />
        </List.Item>} />
    </div>
  )
}

export default DocumentsList
