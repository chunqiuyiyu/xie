export const html = (strings, ...values) =>
  strings.reduce((out, str, i) => out + str + (values[i] ?? ''), '')

export const simAnchorClick = (el) => {
  el.style.display = 'none'
  document.body.appendChild(el)
  el.click()
  document.body.removeChild(el)
}

export const save = () => {
  // updated time
  const timeEl = document.querySelector('#buildTime')
  if (timeEl) {
    const now = new Date()
    timeEl.textContent = `at ${now.toLocaleDateString()}`
  }

  const el = document.createElement('a')
  const docText = document.documentElement.outerHTML

  el.setAttribute(
    'href',
    'data:text/html;charset=utf-8,' + encodeURIComponent(docText),
  )
  el.setAttribute('download', 'index.html')
  simAnchorClick(el)
}

export let titleEdit = ''
export const edit = (title) => {
  titleEdit = title

  const elTitle = document.querySelector('#title')
  const elStory = document.querySelector('#story')
  const elSection = title ? document.querySelector(`#${title}`) : null

  elTitle.value = title ? title : ''
  elStory.value = title ? elSection.querySelector('.content').innerHTML : ''
}

export const delPost = (title) => {
  if (!title) return
  const elSection = document.querySelector(`#${title}`)
  if (elSection) {
    elSection.parentNode.removeChild(elSection)
  }

  const elArchiveList = document.querySelector('#archive')
  if (elArchiveList) {
    const prevListItem = elArchiveList.querySelector(
      `a[href="#${title}"]`,
    )?.parentNode
    if (prevListItem) {
      prevListItem.parentNode.removeChild(prevListItem)
    }
  }
}

export const del = (title) => {
  if (!confirm(`Are you sure to delete "${title}"?`)) return
  delPost(title)
}
