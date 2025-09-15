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
