import DocumentsList from './MDocumentsList/DocumentsList'
import Paragraphs from './MPParagraphs/Paragraphs'
import { HomeOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Breadcrumb, Card } from 'antd'
import Source from './MPSource/Source'
import React from 'react'
import './index.styl'

const MainPage = () => {
  const selectedExelName = useSelector(state => state.source.selectedExcelFileName)
  const selectedWordName = useSelector(state => state.source.selectedWordFileName)

  // todo: separeate on different screens, add routing
  return (
    <div>
      <div className='MainPage-header'>
        <Breadcrumb>
          <Breadcrumb.Item><Link to='/'><HomeOutlined /></Link></Breadcrumb.Item>
          <Breadcrumb.Item>Cходные положения</Breadcrumb.Item>
        </Breadcrumb>
      </div>
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
    </div>
  )
}

export default MainPage
