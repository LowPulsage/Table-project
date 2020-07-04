import { Link } from 'react-router-dom'
import folder from './folder.png'
import { Card } from 'antd'
import React from 'react'
import './index.styl'

const FolderSelection = () => {
  return (
    <div className='FolderSelection-documentList'>
      <Link to='sanPin-SPpOBT' className='folder'>
        <Card title='СПпОВТ'>
          <img src={folder} alt='folder-sanPin-SPpOBT' />
        </Card>
      </Link>
      <Link to='sanPin-YT' className='folder'>
        <Card title='Санпин-Ут'>
          <img src={folder} alt='folder-sanPin-YT' />
        </Card>
      </Link>
      <Link to='sanPin-TkYP' className='folder'>
        <Card title='Санпин-ТкУП'>
          <img src={folder} alt='folder-sanPin-TkYP' />
        </Card>
      </Link>
    </div>
  )
}

export default FolderSelection
