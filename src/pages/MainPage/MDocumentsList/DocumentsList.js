/*eslint-disable */
import React from 'react'
import { List, Avatar } from 'antd'
import { useSelector } from 'react-redux'
import docxIcon from './hotpng.com.png'
import exelIcon from './exel.png'
import './index.styl'

const DocumentsList = (props) => {
  console.log(props, 'doc')
  let value = useSelector(state => state.source)
  console.log(value, 'value')
  return (
    <div className='MainPage-documentList'>
      <List size="small"
        className="list"
        bordered
        dataSource={value.docxFileNames}
        renderItem={item => <List.Item onClick={() => props.setSelectedWordFileId(item.fileName)}>
          <List.Item.Meta className={`documentList-fileName ${props.selectedWordFileId === item.fileName ? 'selected' : ''}`}
            avatar={<Avatar src={docxIcon} />}
            title={<div>{item.fileName}</div>}
          />
        </List.Item>} />
      <List size="small"
        className="list"
        bordered
        dataSource={value.excelFileNames}
        renderItem={item => <List.Item onClick={() => props.setSelectedExcelFileId(item.id)}>
          <List.Item.Meta className={`documentList-fileName ${props.selectedExcelFileId === item.id ? 'selected' : ''}`}
            avatar={<Avatar src={exelIcon} />}
            title={<div>{item.fileName}</div>}
          />
        </List.Item>} />
    </div>
  )
}

export default DocumentsList
