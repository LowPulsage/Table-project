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
  const [percents, setPercents] = useState([])

  useEffect(() => {
    if (fragmentForSearching) {
      const tempArr = allDocsFragments[selectedWordFileName] || []
      const filterArr = tempArr.filter(i => i['Фрагмент 1'].includes(fragmentForSearching)) // исходные положения 
      setArr(filterArr)
      setPercents(tempArr.map(p => p))
      let jakkar = [percents[0] ? percents[0]['Жаккар'] : percents[0]]
      let minimum = [percents[0] ? percents[0]['Минимум'] : percents[0]]
      let cosinus = [percents[0] ? percents[0]['Косинус'] : percents[0]]
    }
  }, [fragmentForSearching])

  // useEffect(() => {
  //   const myFunction = () => {
  //     var winScroll = document.querySelector('.Mainpage-paragraphs').scrollTop
  //     var height = document.querySelector('.Mainpage-paragraphs').scrollHeight -  document.querySelector('.Mainpage-paragraphs').clientHeight;
  //     var scrolled = (winScroll / height) * 100;
  //     document.getElementById("progressBar").style.left = scrolled + "%";
  //   }
  //   document.querySelector('.Mainpage-paragraphs').addEventListener('scroll', myFunction);
  //   return () => {
  //     document.querySelector('.Mainpage-paragraphs').removeEventListener('scroll', myFunction)
  //   }
  // }, [])


  const nameFunc = (propValue, name) => {
    if (!propValue) return <div style={{ color: 'red' }}>0.00</div>
    const currentValue = Number(propValue.replace('%', ''))

    const red = 'red', green = '#b5b207', blue = '#1446a3', yellow = '#ffa500'

    switch (name) {
      case 'Жаккар':
        if (currentValue <= 45) {
          return <div style={{ color: red, fontSize: '12px' }}>{(currentValue / 100).toFixed(2)}</div>
        } else if (currentValue > 45 && currentValue <= 65) {
          return <div style={{ color: yellow, fontSize: '12px' }}>{(currentValue / 100).toFixed(2)}</div>
        } else if (currentValue > 65 && currentValue <= 96.6) {
          return <div style={{ color: green, fontSize: '12px' }}>{(currentValue / 100).toFixed(2)}</div>
        } else return <div style={{ color: blue, fontSize: '12px' }}>{(currentValue / 100).toFixed(2)}</div>
      case 'Минимум':
        if (currentValue <= 65) {
          return <div style={{ color: red, fontSize: '12px' }}>{(currentValue / 100).toFixed(2)}</div>
        } else if (currentValue > 65 && currentValue <= 80) {
          return <div style={{ color: yellow, fontSize: '12px' }}>{(currentValue / 100).toFixed(2)}</div>
        } else if (currentValue > 80 && currentValue <= 98) {
          return <div style={{ color: green, fontSize: '12px' }}>{(currentValue / 100).toFixed(2)}</div>
        } else return <div style={{ color: blue, fontSize: '12px' }}>{(currentValue / 100).toFixed(2)}</div>
      case 'Косинус':
        if (currentValue <= 90) {
          return <div style={{ color: red, fontSize: '12px' }}>{(currentValue / 100).toFixed(2)}</div>
        } else if (currentValue > 90 && currentValue <= 93) {
          return <div style={{ color: yellow, fontSize: '12px' }}>{(currentValue / 100).toFixed(2)}</div>
        } else if (currentValue > 93 && currentValue <= 99) {
          return <div style={{ color: green, fontSize: '12px' }}>{(currentValue / 100).toFixed(2)}</div>
        } else return <div style={{ color: blue, fontSize: '12px' }}>{(currentValue / 100).toFixed(2)}</div>
      default:
        break;
    }
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
