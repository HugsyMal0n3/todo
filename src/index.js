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

const exampleToDo = TodoFactory('.project').create({
  title: 'Example To-Do',
  dueDate: '04/12/2025',
  notes: 'An example note'
})
