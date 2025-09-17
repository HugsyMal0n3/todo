export { TodoFactory }

function TodoFactory (currentProject) {
  const project = document.querySelector(currentProject)

  function create (values) {
    const todo = document.createElement('article')
    todo.className = 'todo'
    todo.style.background = priorityLevel(values.priority)

    const heading = document.createElement('div')
    const title = document.createElement('h3')
    const button = document.createElement('button')
    const dueDate = document.createElement('p')
    const notes = document.createElement('p')

    button.textContent = '...'

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
