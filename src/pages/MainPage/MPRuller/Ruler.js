/*eslint-disable*/
import React, { useState } from 'react'
import './index.styl'
import { useSelector } from 'react-redux'
import { Tooltip } from 'antd'

const Ruler = () => {
  const nodes = useSelector(state => state.source.allNodesRuler);
  const [selectedSeperator, setSelectedSeperator] = useState()

  const handleClickOnSeperator = (e) => {
    if (e.target.classList[2]) {
      setSelectedSeperator(e.target.classList[2])
    }
  }

  return (
    <div className='Ruler-root' style={{ position: 'relative' }} onClick={handleClickOnSeperator}>
      {nodes && nodes.map(i => (
        <a href={`#${i.id}`} key={i.id} className={`seperator ${i.color} ${i.id} ${selectedSeperator === i.id ? 'selectedSeperator' : ''}`}></a>
      ))}
    </div>
  )
}

export default Ruler
