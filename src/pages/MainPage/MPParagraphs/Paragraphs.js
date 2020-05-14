/*eslint-disable*/
import React, { useState, useEffect } from 'react'
import './index.styl'
import __html from './Documents/Адм.регламент_Росстандарт_2346_12112018.js'

// import fz_102 from './Documents/ФЗ_102_26062008.js'
// import prot_10 from './Documents/Протокол_10_ЕЭС_29052014.js'
// import por_pc_98 from './Documents/Порядок_РС_ЕЭК_98_18102016.js'
// import por_pc_21 from './Documents/Порядок_РС_ЕЭЕК_21_17032016.js'
// import por_pk_89 from './Documents/Порядок_РК_ЕЭК_89_26072016.js'
// import por_pk_68 from './Documents/Порядок_РК_ЕЭК_68_070062016.js'
// import por_prov from './Documents/Порядок_проведения_МЭП_РК_ЕЭК_10_24012017.js'
// import por_min_4091 from './Documents/Порядок_Минпромторг_России_4091_15122015.js'
// import por_min_2167 from './Documents/Порядок_Минпромторг_России_2167_30072015.js'
// import por_min_13281 from './Documents/Порядок_Минпромторг_1328_20082013.js'
// import por_min_1081 from './Documents/Порядок_Минпромторг_1081_30112009.js'
// import pol_879 from './Documents/Положение_879_31102009.js'
// import per_24 from './Documents/Перечень_РК_ЕЭК_24_21042015.js'
// import adm_2173 from './Documents/Адм.регламент_Росстандарт_2173_20092019.js'



const Paragraphs = (props) => {
  console.log(props)

  // const [documentOne, setDocument] = useState()
  // debugger
  // useEffect(() => {
  let documentName = props.selectedWordFileId;
  // })
  // }, [])
  const documentOne = require(`./Documents/${props.selectedWordFileId}.js`)
  const document = { __html: documentOne?.default };
  // console.log('sssssss')

  return (
    <div className='Paragraphs-root'>
      <div dangerouslySetInnerHTML={document} className='testText' />
    </div>
  )
}

export default Paragraphs
