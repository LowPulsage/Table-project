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

  return (
    <div className='Source-root'>
      <div className='sourse-all-text'>
        <List
          dataSource={arr}
          itemLayout='horizontal'
          renderItem={item => (
            <List.Item>
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
