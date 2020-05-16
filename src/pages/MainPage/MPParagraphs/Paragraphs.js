import { setFragmentForSearching } from '../../../modules/session/session-reducers'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import formatDoc from './formatDoc'
import './index.styl'

const Paragraphs = () => {
  const [htmlObj, setHtml] = useState({ __html: '' })
  const dipatch = useDispatch()
  const selectedWordFileName = useSelector(state => state.source.selectedWordFileName)
  const fragmentForSearching = useSelector(state => state.source.fragmentForSearching)
  const allDocsFragments = useSelector(state => state.source.allDocsFragments)

  useEffect(() => {
    const documentOne = require(`./Documents/${selectedWordFileName}.js`)
    const { formatted, ids } = formatDoc(documentOne?.default, selectedWordFileName, allDocsFragments)
    setHtml({ __html: formatted })
    setTimeout(() => {
      ids.forEach(i => {
        const name = i.replace(/ /g, '_')
        const node = document.querySelector(`span[name='${name}']`)
        if (node) {
          const parent = node.closest('.western')
          if (parent) {
            parent.classList.add('new-green')
            parent.id = name
          }
        }
      })
    }, 0)
  }, [])

  const selectFragment = e => {
    if (e.target.id) {
      dipatch(setFragmentForSearching(e.target.id))

      if (fragmentForSearching) {
        const oldId = fragmentForSearching.replace(/ /g, '_')
        const node = document.getElementById(oldId)
        if (node) node.classList.remove('active-fragment')
      }

      const node = document.getElementById(e.target.id)
      if (node) node.classList.add('active-fragment')
    }
  }

  return (
    <div
      dangerouslySetInnerHTML={htmlObj}
      className='Paragraphs-root'
      onClick={selectFragment}
    />
  )
}

export default Paragraphs
