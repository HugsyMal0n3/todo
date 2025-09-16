export { DialogManager }

function DialogManager (
  dialogBox,
  dialogForm,
  openDialogBtn,
  closeDialogBtn,
  submitFormBtn,
  onSubmit
) {
  const dialog = document.querySelector(dialogBox)
  const form = document.querySelector(dialogForm)
  const openBtn = document.querySelector(openDialogBtn)
  const closeBtn = document.querySelector(closeDialogBtn)
  const submitBtn = document.querySelector(submitFormBtn)

  const open = () => dialog.showModal()
  const close = () => dialog.close()
  const reset = () => form.reset()

  const getValues = function () {
    const title = dialog.querySelector('#todo-title').value
    const dueDate = dialog.querySelector('#due-date').value
    const priority = dialog.querySelector('input[name=priority]:checked').value
    const notes = dialog.querySelector('#notes').value
    return { title, dueDate, priority, notes }
  }

  openBtn.addEventListener('mouseup', open)
  closeBtn.addEventListener('mouseup', close)
  submitBtn.addEventListener('mouseup', () => {
    const values = getValues()
    onSubmit(values)
    reset()
    close()
  })
}
