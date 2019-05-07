<template>
  <ul class="todo-list">
    <li v-for="todo in todos" :key="todo.id"
      :class="{ todo: true, completed: todo.completed, editing: todo == editedTodo }">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="todo.completed">
        <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
        <button class="destroy" @click="$emit('remove', todo)" />
      </div>
      <input class="edit" type="text"
        v-model="todo.title" focus="todo == editedTodo"
        @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    todos: {
      required: true,
      type: Array,
    },
  },
})
export default class ToDoList extends Vue {
  editedTodo = null
  beforeEditCache = null

  editTodo (todo) {
    this.beforeEditCache = todo.title
    this.editedTodo = todo
  }

  doneEdit (todo) {
    if (!this.editedTodo) return
    this.editedTodo = null
    todo.title = todo.title.trim()
    if (!todo.title) this.removeTodo(todo)
  }

  cancelEdit (todo) {
    this.editedTodo = null
    todo.title = this.beforeEditCache
  }
}
</script>
