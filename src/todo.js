export { TodoFactory }

function TodoFactory (currentProject) {
  const project = document.querySelector(currentProject)

  function create (values) {
    const todo = document.createElement('article')
    todo.className = 'todo'
    todo.style.background = priorityLevel(values.priority)

    const heading = document.createElement('div')
    const actionBtns = document.createElement('div')
    const title = document.createElement('h3')
    const dueDateDiv = document.createElement('div')
    const dueDateHeading = document.createElement('h4')
    const dueDate = document.createElement('p')
    const notesDiv = document.createElement('div')
    const notesHeading = document.createElement('h4')
    const notes = document.createElement('p')

    const optionBtn = document.createElement('button')
    optionBtn.id = 'option-btn'
    optionBtn.type = 'button'
    optionBtn.textContent = '...'
    optionBtn.addEventListener('mouseup', () => toggleOptions(todo, optionBtn))

    title.textContent = values.title
    dueDateHeading.textContent = 'Due'
    dueDate.textContent = values.dueDate
    notesHeading.textContent = 'Notes'
    notes.textContent = values.notes

    actionBtns.className = 'action-btns'

    actionBtns.append(optionBtn)
    heading.append(title, actionBtns)
    dueDateDiv.append(dueDateHeading, dueDate)
    notesDiv.append(notesHeading, notes)
    todo.append(heading, dueDateDiv, notesDiv)
    project.append(todo)

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
        console.log(`Editing "${todo.querySelector('h3').textContent}"`)
      })

      const delBtn = createActionButton('Delete', () => {
        todo.remove()
      })

      optionBtn.insertAdjacentElement('beforebegin', editBtn)
      optionBtn.insertAdjacentElement('beforebegin', delBtn)
    }
  }

  return { create }
}
