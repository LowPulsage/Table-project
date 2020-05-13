/*eslint-disable */
import React, { useState } from 'react'
import Source from './MPSource/Source'
import Paragraphs from './MPParagraphs/Paragraphs'
import HeaderLeft from './MPHeaders/HeaderLeft'
import HeaderRight from './MPHeaders/HeaderRight'
import './index.styl'

const MainPage = () => {
  const [currentSelectedId, setCurrentSelectedId] = useState() 
  return (
    <div className='MainPage-root'>
      <div className='mainPage-header'>
        <HeaderLeft />
        <HeaderRight />
      </div>
      <div className='mainPage-leftSide'>
        <Paragraphs currentSelectedId={currentSelectedId}/>
        <Source setCurrentSelectedId={setCurrentSelectedId}/>
      </div>
    </div>
  )
}

export default MainPage
