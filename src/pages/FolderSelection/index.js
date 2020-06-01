import { Link } from 'react-router-dom'
import folder from './folder.png'
import { Card } from 'antd'
import React from 'react'
import './index.styl'

const FolderSelection = () => {
  return (
    <div className='FolderSelection-documentList'>
      <Link to='sanPin-TkYP' className='folder'>
        <Card title='СанПин ТкУП'>
          <img src={folder} alt='folder-sanPin-TkYP' />
        </Card>
      </Link>
      <Link to='sanPin-YT' className='folder'>
        <Card title='СанПин УТ'>
          <img src={folder} alt='folder-sanPin-YT' />
        </Card>
      </Link>
      <Link to='sanPin-SPpOBT' className='folder'>
        <Card title='СанПин СПпОВТ'>
          <img src={folder} alt='folder-sanPin-SPpOBT' />
        </Card>
      </Link>
    </div>
  )
}

export default FolderSelection
