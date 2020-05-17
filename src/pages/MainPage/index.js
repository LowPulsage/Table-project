import Paragraphs from './MPParagraphs/Paragraphs'
import { Link, useParams } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { Breadcrumb, Card } from 'antd'
import Source from './MPSource/Source'
import React from 'react'
import './index.styl'

const MainPage = () => {
  const selectedExelName = useSelector(state => state.source.selectedExcelFileName)
  const selectedWordName = useSelector(state => state.source.selectedWordFileName)

  return (
    <div className='MainPage-root'>
      <div className='header'>
        <Breadcrumb>
          <Breadcrumb.Item><Link to='/'><HomeOutlined /></Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to={`/${useParams().type}`}>Cходные положения</Link></Breadcrumb.Item>
          <Breadcrumb.Item>{selectedWordName}</Breadcrumb.Item>
          <Breadcrumb.Item>{selectedExelName}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className='content'>
        <div className='Mainpage-paragraphs'>
          <Card title='Исходный файл'>
            <Paragraphs />
          </Card>
        </div>
        <div className='Mainpage-source'>
          <Card title='Сходные положения'>
            <Source />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default MainPage
