export { TodoFactory }

function TodoFactory (currentProject) {
  const project = document.querySelector(currentProject)

  function create (values) {
    const todo = document.createElement('article')
    todo.className = 'todo'

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

  function priority () {}

  return { create }
}
