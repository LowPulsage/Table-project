import { Link } from 'react-router-dom'
import folder from './folder.png'
import { Card } from 'antd'
import React from 'react'
import './index.styl'

const FolderSelection = () => {
  return (
    <div className='FolderSelection-documentList'>
      <div className='FolderSelection-firstRow'>
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
      </div>
      <div className='FolderSelection-secondRow'>
        <Link to='sanPins' className='folder'>
          <Card title='СанПины'>
            <img src={folder} alt='folder-sanPins' />
          </Card>
        </Link>
      </div>
    </div>
  )
}

export default FolderSelection
