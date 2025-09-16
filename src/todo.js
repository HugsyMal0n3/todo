export { CreateNewToDoDom }

function CreateNewToDoDom (currentProject) {
  const project = document.querySelector(currentProject)
  const todo = document.createElement('article')
  const heading = document.createElement('div')
  const title = document.createElement('h3')
  const button = document.createElement('button')
  const dueDate = document.createElement('p')
  const notes = document.createElement('p')

  todo.className = 'todo'
  button.textContent = '...'

  heading.append(title, button)
  todo.append(heading, dueDate, notes)
  project.append(todo)

  function insertValues (getValues) {
    console.log(getValues)
    title.textContent = getValues.title
  }

  return { insertValues }
}
