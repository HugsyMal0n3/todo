import './styles.css'

const dialog = document.querySelector('dialog')

const openDialogBtn = document.querySelector('#create-todo')
openDialogBtn.addEventListener('mousedown', () => {
  dialog.showModal()
})

const closeDialogBtn = document.querySelector('dialog button')
closeDialogBtn.addEventListener('mousedown', () => {
  dialog.close()
})

const retrieveValues = function () {
  const title = dialog.querySelector('#todo-title').value
  const dueDate = dialog.querySelector('#due-date').value
  const priority = dialog.querySelector('input[name=priority]:checked').value
  const notes = dialog.querySelector('#notes').value
}
