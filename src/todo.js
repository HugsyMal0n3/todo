export { TodoFactory }

function TodoFactory (currentProject) {
  const project = document.querySelector(currentProject)

  function create (values) {
    const todo = document.createElement('article')
    todo.className = 'todo'
    todo.style.background = priorityLevel(values.priority)

    const heading = document.createElement('div')
    heading.id = 'heading'
    const title = document.createElement('h3')
    const dueDate = document.createElement('p')
    const notes = document.createElement('p')

    const button = document.createElement('button')
    button.id = 'button'
    button.type = 'button'
    button.textContent = '...'
    button.addEventListener('mouseup', () => {
      todo.remove()
    })

    title.textContent = values.title
    dueDate.textContent = values.dueDate
    notes.textContent = values.notes

    heading.append(title, button)
    todo.append(heading, dueDate, notes)
    project.append(todo)

    return todo
  }

  const priorityLevel = choice => {
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

  return { create, priorityLevel }
}
