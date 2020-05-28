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
      <Link to='orb-others' className='folder'>
        <Card title='ОРВ-другие'>
          <img src={folder} alt='folder-orb-others' />
        </Card>
      </Link>
      <Link to='orb-fz' className='folder'>
        <Card title='ОРВ-ФЗ'>
          <img src={folder} alt='folder-orb-fz' />
        </Card>
      </Link>
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
