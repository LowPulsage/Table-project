/*eslint-disable */
import React, { useState } from 'react'
import Source from './MPSource/Source'
import Paragraphs from './MPParagraphs/Paragraphs'
import HeaderLeft from './MPHeaders/HeaderLeft'
import HeaderRight from './MPHeaders/HeaderRight'
import './index.styl'
import DocumentsList from './MDocumentsList/DocumentsList'

const MainPage = () => {
  const [currentSelectedId, setCurrentSelectedId] = useState()
  const [selectedWordFileId, setSelectedWordFileId] = useState()
  const [selectedExcelFileId, setSelectedExcelFileId] = useState()
  return (
    <div className='MainPage-root'>
      {!selectedWordFileId || !selectedExcelFileId ?
        <DocumentsList
          setSelectedWordFileId={setSelectedWordFileId}
          setSelectedExcelFileId={setSelectedExcelFileId}
          selectedWordFileId={selectedWordFileId}
          selectedExcelFileId={selectedExcelFileId}
        /> :
        <div className='MainPage-root-allCont'>
          <div className='mainPage-header'>
            <HeaderLeft />
            <HeaderRight />
          </div>
          <div className='mainPage-content'>
            <Paragraphs currentSelectedId={currentSelectedId} />
            <Source setCurrentSelectedId={setCurrentSelectedId} />
          </div>
        </div>
      }
    </div>
  )
}

export default MainPage
