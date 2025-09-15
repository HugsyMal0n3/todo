const dialog = document.querySelector('dialog')

const openDialogBtn = document.querySelector('#create-todo')
openDialogBtn.addEventListener('mouseup', () => {
  dialog.showModal()
})

const closeDialogBtn = document.querySelector('dialog button')
closeDialogBtn.addEventListener('mouseup', () => {
  dialog.close()
})

const submitform = document.querySelector('#submit-form')
submitform.addEventListener('mouseup', () => {
  const retrievedValues = retrieveValues()
  resetForm()
  dialog.close()
})

const retrieveValues = function () {
  const title = dialog.querySelector('#todo-title').value
  const dueDate = dialog.querySelector('#due-date').value
  const priority = dialog.querySelector('input[name=priority]:checked').value
  const notes = dialog.querySelector('#notes').value
  return { title, dueDate, priority, notes }
}

const resetForm = function () {
  const dialogForm = document.querySelector('#todoForm')
  dialogForm.reset()
}
