/*eslint-disable */
import React, { useState } from 'react'
import Source from './MPSource/Source'
import Paragraphs from './MPParagraphs/Paragraphs'
import HeaderLeft from './MPHeaders/HeaderLeft'
import HeaderRight from './MPHeaders/HeaderRight'
import './index.styl'
import DocumentsList from './MDocumentsList/DocumentsList'
import { useSelector } from 'react-redux'


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
          <div className='mainPage-header'>
            <HeaderLeft />
            <HeaderRight />
          </div>
          <div className='mainPage-content'>
            <Paragraphs />
            <Source />
          </div>
        </div>
      }
    </div>
  )
}

export default MainPage

// currentSelectedId={currentSelectedId} Paragraph
//setCurrentSelectedId={setCurrentSelectedId} Source