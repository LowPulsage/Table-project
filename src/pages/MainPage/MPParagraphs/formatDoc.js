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

  const wrapElement = fr => { // side effect function
    const pos = formatted.indexOf(fr)

    // якщо індекс не знайдено, тоді робимо нічого
    if (pos < 1) return
    const symbolsBeforeWrapperFr = formatted.slice(0, pos)
    const newWrappedFr = `<span class="new-green">${fr}</span>`
    const symbolsAfterWrapperFr = formatted.slice(pos + fr.length)
    formatted = `${symbolsBeforeWrapperFr}${newWrappedFr}${symbolsAfterWrapperFr}`
  }

  const allDocsFragments = getFragments(allRows)

  const fragments = allDocsFragments[docName] || []

  fragments.forEach(fr => {
    const fr50 = fr['Фрагмент 1'].slice(0, 50) // "Настоящий Порядок разработан в соответствии с подп"
    wrapElement(fr50)
  })

  return formatted
}
