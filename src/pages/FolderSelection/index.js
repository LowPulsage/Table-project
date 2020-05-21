import { Link } from 'react-router-dom'
import folder from './folder.png'
import { Card } from 'antd'
import React from 'react'
import './index.styl'

const FolderSelection = () => {
  return (
    <div className='FolderSelection-documentList'>
      <Link to='metrologiya' className='folder'>
        <Card title='Метрология'>
          <img src={folder} alt='folder-metrologiya' />
        </Card>
      </Link>
      <Link to='roskomnadzor' className='folder'>
        <Card title='Роскомнадзор'>
          <img src={folder} alt='folder-roskomnadzor' />
        </Card>
      </Link>
      <Link to='ORB-others' className='folder'>
        <Card title='ОРВ-другие'>
          <img src={folder} alt='folder-ORB-others' />
        </Card>
      </Link>
      <Link to='ORB-FZ' className='folder'>
        <Card title='ОРВ-ФЗ'>
          <img src={folder} alt='folder-ORB-FZ' />
        </Card>
      </Link>
    </div>
  )
}

export default FolderSelection
