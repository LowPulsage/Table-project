/* eslint-disable */
import { setSelectedWordName, setSelectedExcelName } from 'modules/session/session-reducers'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'
import MPParagraphs from './MPParagraphs'
import React, { useEffect } from 'react'
import { Breadcrumb, Card } from 'antd'
import Source from './MPSource/Source'
import './index.styl'

const MainPage = () => {
  const selectedExelName = useSelector(state => state.source.selectedExcelFileName)
  const selectedWordName = useSelector(state => state.source.selectedWordFileName)
  const dispatch = useDispatch()

  useEffect(() => {
    const res = new URLSearchParams(location.search)
    if (!selectedExelName) {
      dispatch(setSelectedExcelName(res.get('excel')))
    }
    if (!selectedWordName) {
      dispatch(setSelectedWordName(res.get('word')))
    }
  }, [])

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
            <MPParagraphs />
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
