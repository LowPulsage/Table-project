import DocumentsList from './MDocumentsList/DocumentsList'
import Paragraphs from './MPParagraphs/Paragraphs'
import { useSelector } from 'react-redux'
import Source from './MPSource/Source'
import { Card } from 'antd'
import React from 'react'
import './index.styl'

const MainPage = () => {
  const selectedExelName = useSelector(state => state.source.selectedExcelFileName)
  const selectedWordName = useSelector(state => state.source.selectedWordFileName)

  // todo: separeate on different screens, add routing
  return (
    <div className='MainPage-root'>
      {!selectedExelName || !selectedWordName
        ? <DocumentsList />
        : (
          <div className='MainPage-root-allCont'>
            <div className='mainPage-content'>
              <div className='Mainpage-paragraphs'>
                <Card title={(
                  <div>
                    <b>Исходный файл</b>
                    <br />
                    {selectedWordName}
                  </div>
                )}
                >
                  <Paragraphs />
                </Card>
              </div>
              <div className='Mainpage-source'>
                <Card title={(
                  <div>
                    <b>Сходные положения</b>
                    <br />
                    {selectedExelName}
                  </div>
                )}
                >
                  <Source />
                </Card>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default MainPage
