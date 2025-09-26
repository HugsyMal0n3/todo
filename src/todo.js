export { TodoFactory }

function TodoFactory (currentProject) {
  const project = document.querySelector(currentProject)
  let removalTimer

  function create (values) {
    const todoArticle = document.createElement('article')
    const completeBtn = document.createElement('button')
    completeBtn.className = 'complete'
    completeBtn.type = 'button'
    completeBtn.addEventListener('mouseup', () => {
      toggleComplete(title, todoArticle)
    })

    const todo = document.createElement('div')
    todo.className = 'todo'
    todo.style.background = priorityLevel(values.priority)

    const actionBtns = document.createElement('div')
    const heading = document.createElement('div')
    const headingDiv = document.createElement('div')
    const title = document.createElement('h3')
    const dueDate = document.createElement('p')
    const notesDiv = document.createElement('div')
    const notesHeading = document.createElement('h4')
    const notes = document.createElement('p')

    const optionBtn = document.createElement('button')
    optionBtn.class = 'option-btn'
    optionBtn.type = 'button'
    optionBtn.textContent = '...'
    optionBtn.addEventListener('mouseup', () => {
      toggleOptions(todoArticle, optionBtn)
    })

    headingDiv.addEventListener('mouseup', () => {
      expandTodo(notesDiv)
    })

    title.textContent = values.title
    dueDate.textContent = values.dueDate
    notes.textContent = values.notes

    if (notes.textContent) {
      notesHeading.textContent = 'Notes'
    }

    actionBtns.className = 'action-btns'
    notesDiv.className = 'content'

    actionBtns.append(optionBtn)
    headingDiv.append(title, dueDate)
    heading.append(headingDiv, actionBtns)
    notesDiv.append(notesHeading, notes)
    todo.append(heading, notesDiv)
    todoArticle.append(completeBtn, todo)
    project.append(todoArticle)

    return todo
  }

  function priorityLevel (choice) {
    switch (choice) {
      case 'low':
        return '#eaf2f8'
      case 'medium':
        return '#f2e6feff'
      case 'high':
        return '#fde0e0'
      default:
        break
    }
  }

  function createActionButton (label, onClick) {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'action slide-in'
    btn.textContent = label
    btn.addEventListener('mouseup', onClick)
    return btn
  }

  function toggleOptions (todo, optionBtn) {
    const existingBtns = todo.querySelectorAll('.action')

    if (existingBtns.length > 1) {
      existingBtns.forEach(btn => {
        btn.classList.remove('slide-in')
        btn.classList.add('slide-out')
        btn.addEventListener('animationend', () => btn.remove(), { once: true })
      })
    } else {
      const editBtn = createActionButton('Edit', () => {
        editTodo(todo)
      })

      const delBtn = createActionButton('Delete', () => {
        todo.remove()
      })

      optionBtn.insertAdjacentElement('beforebegin', editBtn)
      optionBtn.insertAdjacentElement('beforebegin', delBtn)
    }
  }

  function expandTodo (content) {
    if (content.style.maxHeight) {
      content.style.maxHeight = null
      setTimeout(function () {
        content.style.display = 'none'
      }, 200)
    } else {
      content.style.display = 'block'
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  }

  function toggleComplete (heading, todo) {
    const strike = heading.querySelector('s')

    if (!strike) {
      const content = heading.textContent
      const s = document.createElement('s')
      s.textContent = `${content}`
      heading.textContent = ''
      heading.append(s)

      removalTimer = setTimeout(() => {
        todo.remove()
      }, 4000)
    } else {
      const content = strike.textContent
      heading.textContent = content

      clearTimeout(removalTimer)
    }
    return { toggleComplete }
  }

  function editTodo (todo) {
    const title = todo.querySelector('h3')
    const dueDate = todo.querySelector('p')
    const notes = todo.querySelector('.content > p')

    title.style.color = '#ec9fc8'
    dueDate.style.color = '#ec9fc8'
    notes.style.color = '#ec9fc8'

    title.setAttribute('contenteditable', 'true')
    title.focus()
    title.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        if (event.shiftKey) {
          return
        }
        event.preventDefault()
        dueDate.focus()
      }
    })

    dueDate.setAttribute('contenteditable', 'true')
    dueDate.addEventListener('keypress', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault()
        notes.focus()
      }
    })

    notes.setAttribute('contenteditable', 'true')
    notes.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        if (event.shiftKey) {
          return
        }
        title.setAttribute('contenteditable', 'false')
        title.style.color = '#5f6f7a'
        notes.setAttribute('contenteditable', 'false')
        notes.style.color = '#5f6f7a'
        dueDate.setAttribute('contenteditable', 'false')
        dueDate.style.color = '#5f6f7a'
      }
    })
  }

  return { create }
}
