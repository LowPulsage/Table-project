
import { setFragmentForSearching } from 'modules/session/session-reducers'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import formatDoc from './formatDoc'
import './index.styl'

const MPParagraphs = () => {
  const selectedWordFileName = useSelector(state => state.source.selectedWordFileName)
  const fragmentForSearching = useSelector(state => state.source.fragmentForSearching)
  const allDocsFragments = useSelector(state => state.source.allDocsFragments)
  const [htmlObj, setHtml] = useState({ __html: '' })
  const dipatch = useDispatch()

  useEffect(() => {
    if (selectedWordFileName) {
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
    }
  }, [selectedWordFileName])

  const selectFragment = e => {
    const parentNode = e.target.closest('p[id]') || {}
    const newId = parentNode.id
    if (newId) {
      dipatch(setFragmentForSearching(newId))

      if (fragmentForSearching) {
        const oldId = fragmentForSearching.replace(/ /g, '_')
        const node = document.getElementById(oldId)
        if (node) node.classList.remove('active-fragment')
      }

      const node = document.getElementById(newId)
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

export default MPParagraphs
