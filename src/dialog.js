import { CreateNewToDoDom } from './todo'

export { DialogManager }

function DialogManager (
  dialogBox,
  dialogForm,
  openDialogBtn,
  closeDialogBtn,
  submitFormBtn,
  project
) {
  const dialog = document.querySelector(dialogBox)
  const form = document.querySelector(dialogForm)
  const openBtn = document.querySelector(openDialogBtn)
  const closeBtn = document.querySelector(closeDialogBtn)
  const submitBtn = document.querySelector(submitFormBtn)
  const currentProject = document.querySelector(project)

  openBtn.addEventListener('mouseup', () => {
    dialog.showModal()
  })

  closeBtn.addEventListener('mouseup', () => {
    dialog.close()
  })

  submitBtn.addEventListener('mouseup', () => {
    CreateNewToDoDom(project).insertValues(retrieveValues())
    resetForm()
    dialog.close()
  })

  const resetForm = function () {
    form.reset()
  }

  const retrieveValues = function () {
    const title = dialog.querySelector('#todo-title').value
    const dueDate = dialog.querySelector('#due-date').value
    const priority = dialog.querySelector('input[name=priority]:checked').value
    const notes = dialog.querySelector('#notes').value
    return { title, dueDate, priority, notes }
  }
}
