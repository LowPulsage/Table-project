/*eslint-disable*/
import React, { useState, useEffect } from 'react'
import './index.styl'
import { Skeleton } from 'antd'
// import test from './Порядок_РК_ЕЭК_161_06122016.pdf'
// import mammoth from 'mammoth'
import __html from './Порядок_РК_ЕЭК_161_06122016.js'
var template = { __html };

const Paragraphs = (props) => {
  // const te112 = require('./Порядок_Минпромторг_1328_20082013.pdf')
  // const te113 = require('./Адм.регламент_Росстандарт_2173_20092019.pdf')
  /*  */
  debugger
  return (
    <div className='Paragraphs-root'>
      <div dangerouslySetInnerHTML={template} className='testText'/>
      {/* {
        props.currentSelectedId ?
          (props.currentSelectedId === 1 || props.currentSelectedId === 3) ?
            <iframe src={te111} style={{ width: '100%', height: '100%' }} />
            : props.currentSelectedId === 2 ?
              <iframe src={te112} style={{ width: '100%', height: '100%' }} />
              : <iframe src={te113} style={{ width: '100%', height: '100%' }} />
          : <Skeleton active />
      } */}
    </div>
  )
}

export default Paragraphs


