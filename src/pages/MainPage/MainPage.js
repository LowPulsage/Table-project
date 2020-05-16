/*eslint-disable */
import React, { useState } from 'react'
import Source from './MPSource/Source'
import Paragraphs from './MPParagraphs/Paragraphs'
// import HeaderLeft from './MPHeaders/HeaderLeft'
// import HeaderRight from './MPHeaders/HeaderRight'
import './index.styl'
import DocumentsList from './MDocumentsList/DocumentsList'
import { useSelector } from 'react-redux'
import { Card } from 'antd'


const MainPage = () => {
  const selectedExelName = useSelector(state => state.source.selectedWordFileName)
  const selectedWordName = useSelector(state => state.source.selectedExcelFileName)
  // const [currentSelectedId, setCurrentSelectedId] = useState()
  // const [selectedWordFileId, setSelectedWordFileId] = useState()
  // const [selectedExcelFileId, setSelectedExcelFileId] = useState()

  return (
    <div className='MainPage-root'>
      {!selectedExelName || !selectedWordName ?
        <DocumentsList /> :
        <div className='MainPage-root-allCont'>
          <div className='mainPage-content'>
          <Card title="ФЗ: о государственном контроле (надзоре) и о муниципальном контроле в Российской федерации" bordered={false}>
            <Paragraphs />
          </Card>
          <Card title="Сходные положения" bordered={false} >
            <Source />
          </Card>
          </div>
        </div>
      }
    </div>
  )
}

export default MainPage

// currentSelectedId={currentSelectedId} Paragraph
//setCurrentSelectedId={setCurrentSelectedId} Source