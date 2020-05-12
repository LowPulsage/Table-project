import React from 'react'
import SourceContainer from './MPSource/Source'
import Paragraphs from './MPParagraphs/Paragraphs'
import HeaderLeft from './MPHeaders/HeaderLeft'
import HeaderRight from './MPHeaders/HeaderRight'
import './index.styl'

const MainPage = () => {
  return (
    <div className='MainPage-root'>
      <div className='mainPage-header'>
        <HeaderLeft />
        <HeaderRight />
      </div>
      <div className='mainPage-leftSide'>
        <Paragraphs />
        <SourceContainer />
      </div>
    </div>
  )
}

export default MainPage
