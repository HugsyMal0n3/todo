import './styles.css'

import { DialogManager } from './dialog'
import { CreateNewToDoDom } from './todo'

const toDoDialog = DialogManager(
  'dialog',
  '#todo-form',
  '#create-todo',
  '#close-dialog',
  '#submit-form'
)

CreateNewToDoDom('.project')
