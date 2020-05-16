import { allRows } from './bigExcel'

const getFragments = r => r.reduce((acc, i) => {
  const fileName = i['Файл 1']
  if (!acc[fileName]) acc[fileName] = []
  acc[fileName].push(i)
  return acc
}, {})

export default (docHtml, docName) => {
  // стиснув, щоб по ньому можна було шукати
  let formatted = docHtml.replace(/(?:\r\n|\r|\n)/g, ' ')
  const pushed = []

  const wrapElement = fr => { // side effect function
    const pos = formatted.indexOf(fr)

    if (pushed.includes(fr)) return // щоб не врапити фрагмент, який уже заврапили
    if (pos < 1) return // якщо індекс не знайдено, тоді робимо нічого
    pushed.push(fr)

    const symbolsBeforeWrapperFr = formatted.slice(0, pos)
    const newWrappedFr = `<span class="new-green" id=${fr.replace(/ /g, '_')}>${fr}</span>`
    const symbolsAfterWrapperFr = formatted.slice(pos + fr.length)

    formatted = `${symbolsBeforeWrapperFr}${newWrappedFr}${symbolsAfterWrapperFr}`
  }

  const allDocsFragments = getFragments(allRows)

  const fragments = allDocsFragments[docName] || []

  fragments.forEach(fr => { // Переписати на .reduce, щоб позбутись side-effect function
    const frToCut = 40
    const frCutted = fr['Фрагмент 1'].slice(0, frToCut) // "Настоящий Порядок разработан в соответствии с подп"
    wrapElement(frCutted)
  })

  return formatted
}
