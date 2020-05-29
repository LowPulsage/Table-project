/* eslint-disable */
export default (docHtml, docName, allDocsFragments) => {
  let formatted = docHtml.replace(/(?:\r\n|\r|\n)/g, ' ')
  formatted = formatted.replace(/ALIGN=JUSTIFY/g, 'class=western')
  const ids = []

  const wrapElement = fr => { // side effect function
    const pos = formatted.indexOf(fr)

    if (ids.includes(fr)) return
    if (pos < 1) return
    ids.push(fr)

    const symbolsBeforeWrapperFr = formatted.slice(0, pos)
    const newWrappedFr = `<span name=${fr.replace(/ /g, '_')}>${fr}</span>`
    const symbolsAfterWrapperFr = formatted.slice(pos + fr.length)

    formatted = `${symbolsBeforeWrapperFr}${newWrappedFr}${symbolsAfterWrapperFr}`
  }

  const fragments = allDocsFragments[docName] || []

  fragments.forEach(fr => {
    const frToCut = 27
    const frCutted = fr['Фрагмент 1'].slice(0, frToCut) // "Настоящий Порядок разработан в соответствии с подп"
    wrapElement(frCutted)
  })

  return { formatted, ids }
}
