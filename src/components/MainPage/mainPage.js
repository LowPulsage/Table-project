import React from 'react'
import style from './MainPage.module.css'
import Source from './Source/Source'
import Paragraphs from './Paragraphs/Paragraphs'
import HeaderLeft from './Headers/HeaderLeft'
import HeaderRight from './Headers/HeaderRight'
import Pagination from './Pagination/Pagination'

const MainPage = () => {
  return (
    <div className={style.mainStyle}>
      <div>
        <div className={style.rightHeader}>
          <HeaderLeft />
        </div>
        <div className={style.leftSide}>
          <Paragraphs />
        </div>
      </div>
      <span>
        <div className={style.leftHeader}>
          <HeaderRight />
        </div>
        <div className={style.rightSide}>
          <span>
            <Source />
          </span>
          <span className={style.pagination}>
            <Pagination />
          </span>
        </div>
      </span>
    </div>
  )
}

export default MainPage
