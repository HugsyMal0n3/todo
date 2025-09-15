import './styles.css'

import { DialogManager } from './dialog'

const toDoDialog = DialogManager(
  'dialog',
  '#todo-form',
  '#create-todo',
  '#close-dialog',
  '#submit-form'
)
