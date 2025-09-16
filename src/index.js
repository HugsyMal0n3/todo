import './styles.css'

import { DialogManager } from './dialog'
import { TodoFactory } from './todo'

const todoDialog = DialogManager(
  'dialog',
  '#todo-form',
  '#create-todo',
  '#close-dialog',
  '#submit-form',
  values => {
    TodoFactory('.project').create(values)
  }
)
