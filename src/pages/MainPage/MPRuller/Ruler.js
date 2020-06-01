/*eslint-disable*/
import React from 'react'
import './index.styl'
import { useSelector } from 'react-redux'
import { Tooltip } from 'antd'

const Ruler = () => {
  const nodes = useSelector(state => state.source.allNodesRuler);
  // const onHandleClick = e => {
  //   let target = document.querySelector('.Ruler-root')

  //   let targetCoords = target.getBoundingClientRect()
  //   let xCoord = e.clientX - targetCoords.left;
  //   let yCoord = e.clientY - targetCoords.top;
  //   alert('Координаты по X: ' + xCoord);
  //   alert('Координаты по Y: ' + yCoord);
  // }

  return (
    <div className='Ruler-root' style={{ position: 'relative' }}>
      {nodes && nodes.map(i => (
        i.id.includes('anchorid') ? <a href={`#${i.id}`} className={`seperator ${i.color}`}></a> :
            <a href={`#${i.id}`} className={`seperator ${i.color}`}></a>
      ))}
    </div>
  )
}

export default Ruler
