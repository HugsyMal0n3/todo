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

  const radial = document.querySelector('#dialogRadial')
  radial.addEventListener('click', () => {
    dialog.style.background = priorityLevel(getValues().priority)
  })
}
