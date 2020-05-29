/*eslint-disable*/
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { List } from 'antd'
import './index.styl'

const Source = () => {
  const selectedWordFileName = useSelector(state => state.source.selectedWordFileName)
  const fragmentForSearching = useSelector(state => state.source.fragmentForSearching)
  const allDocsFragments = useSelector(state => state.source.allDocsFragments)
  const [arr, setArr] = useState([])


  useEffect(() => {
    if (fragmentForSearching) {
      const arr = allDocsFragments[selectedWordFileName] || []
      setArr(arr.filter(i => i['Фрагмент 1'].includes(fragmentForSearching)))
    }
  }, [fragmentForSearching])

  const nameFunc = (propValue, name) => {
    if (!propValue) return <div style={{ color: 'red' }}>0.00</div>
    const currentValue = Number((Number(propValue.replace('%', '')) / 100))
    switch (name) {
      case 'Жаккар':
        if (currentValue <= 0.45) {
          return <div style={{ color: 'red', fontSize: '12px' }}>{currentValue.toFixed(2)}</div>
        } else if (currentValue > 0.45 && currentValue <= 0.65) {
          return <div style={{ color: 'yellow', fontSize: '12px' }}>{currentValue.toFixed(2)}</div>
        } else if (currentValue > 0.66 && currentValue <= 0.96) {
          return <div style={{ color: 'green', fontSize: '12px' }}>{currentValue.toFixed(2)}</div>
        } else return <div style={{ color: 'aqua', fontSize: '12px' }}>{currentValue.toFixed(2)}</div>
      case 'Минимум':
        break;
      case 'Косинус':
        break
      default:
        break;
    }
    // const currentValue = Number((Number(propValue.replace('%', '')) / 100))
    // if (currentValue > 0 && currentValue <= 0.33) {
    //   return <div style={{ color: 'red', fontSize: '12px' }}>{currentValue.toFixed(2)}</div>
    // } else if (currentValue > 0.33 && currentValue <= 0.66) {
    //   return <div style={{ color: 'grey', fontSize: '12px' }}>{currentValue.toFixed(2)}</div>
    // } else if (currentValue > 0.66) {
    //   return <div style={{ color: 'green', fontSize: '12px' }}>{currentValue.toFixed(2)}</div>
    // }
  }

  return (
    <div className='Source-root'>
      <div className='sourse-all-text'>
        <List
          dataSource={arr}
          itemLayout='horizontal'
          renderItem={item => (
            <List.Item style={{ alignItems: 'flex-start' }}>
              <div style={{ marginRight: '15px' }}>
                <div>{nameFunc(item['Жаккар'], 'Жаккар')}</div>
                <div>{nameFunc(item['Минимум'], 'Минимум')}</div>
                <div>{nameFunc(item['Косинус'], 'Косинус')}</div>
              </div>
              <List.Item.Meta
                title={<div>{item['Файл 2']}</div>}
                description={item['Фрагмент 2']}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default Source
