import {
  del,
  delPost,
  edit,
  html,
  save,
  simAnchorClick,
  titleEdit,
} from './helper'
import { md } from './md'

document.addEventListener('DOMContentLoaded', () => {
  // default nav to archive
  if (location.hash === '' || location.hash === '#') {
    const el = document.createElement('a')
    el.href = '#archive'
    simAnchorClick(el)
  }

  // add new post
  const newBtn = document.querySelector('#btnNew')
  newBtn.addEventListener('click', () => {
    edit()
  })

  // publish new post
  const pubBtn = document.querySelector('#publish')
  pubBtn.addEventListener('click', () => {
    if (titleEdit) {
      delPost(titleEdit)
    }

    const elSection = document.createElement('section')
    const elToast = document.querySelector('#toast')
    const elTitle = document.querySelector('#title')
    const elStory = document.querySelector('#story')

    const title = elTitle?.value.trim()
    const story = elStory?.value
    if (!title) {
      elToast.textContent = 'Title is required.'
      elToast.togglePopover()
      return
    }

    elSection.id = title
    elSection.innerHTML = html`
      <article>
        <h1>${title}</h1>
        <div style="color: gray; font-size: 0.9em; margin-bottom: 1em">
          <timedata>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</timedata>
          <a href="#new" class="edit">Edit</a> 
          <a
              href="#archive"
              class="del"
              style="color: red"
              >Delete</a
            >
          </div>
        </div>
        <article class="content">${md(story)}</article>
      </article>
    `
    document.querySelector('main').append(elSection)

    elSection.querySelector('.edit').onclick = edit.bind(this, title)
    elSection.querySelector('.del').onclick = del.bind(this, title)

    // add to archive list
    const elArchiveList = document.querySelector('#archive ul')
    const listItemEl = document.createElement('li')
    listItemEl.innerHTML = html`<a href="#${title}">${title}</a
      ><time>${new Date().toLocaleDateString()}</time>`
    elArchiveList.append(listItemEl)

    const el = document.createElement('a')
    el.href = '#archive'
    simAnchorClick(el)
  })

  // save document
  const saveBtn = document.querySelector('#save')
  saveBtn.addEventListener('click', (e) => {
    e.preventDefault()

    save()
  })
})
