<template>
  <div>
    <section v-cloak class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
          v-model="newTodo" @keyup.enter="addTodo">
      </header>
      <section class="main" v-show="todos.length">
        <input class="toggle-all" type="checkbox" v-model="allDone">
        <ToDoList :todos="filteredTodos" @remove="removeTodo" />
      </section>
      <footer class="footer" v-show="todos.length">
        <span class="todo-count">
          <strong v-text="remaining" /> {{ pluralize('item', remaining) }} left
        </span>
        <ul class="filters">
          <li><a href="#" @click.prevent="visibility = 'all'" :class="{selected: visibility == 'all'}">All</a></li>
          <li><a href="#" @click.prevent="visibility = 'active'" :class="{selected: visibility == 'active'}">Active</a></li>
          <li><a href="#" @click.prevent="visibility = 'completed'" :class="{selected: visibility == 'completed'}">Completed</a></li>
        </ul>
        <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
          Clear completed
        </button>
      </footer>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Based on implementation by <a href="http://evanyou.me">Evan You</a></p>
      <p><a class="google-for-todomvc" href="https://www.google.com/search?q=todo+mvc">Search Todo MVC on Google</a></p>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

import ToDoList from './ToDoList.vue'

const filters = {
  all (todos) {
    return todos
  },
  active (todos) {
    return todos.filter(function(todo) {
      return !todo.completed
    })
  },
  completed (todos) {
    return todos.filter(function(todo) {
      return todo.completed
    })
  },
}

@Component({
  components: {
    ToDoList,
  },
  directives: {
    'focus' (el, binding) {
      if (binding.value) {
        el.focus()
      }
    },
  },
})
export default class App extends Vue {
  todos = []
  newTodo = ''
  visibility = 'all'

  get filteredTodos () {
    return filters[this.visibility](this.todos)
  }

  get remaining () {
    return filters.active(this.todos).length
  }

  get allDone () {
    return this.remaining === 0
  }

  set allDone (value) {
    this.todos.forEach(function(todo) {
      todo.completed = value
    })
  }

  pluralize (word, count) {
    return word + (count === 1 ? '' : 's')
  }

  addTodo () {
    const value = this.newTodo && this.newTodo.trim()
    if (!value) {
      return
    }
    this.todos.push({ title: value, completed: false })
    this.newTodo = ''
  }

  removeTodo (todo) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
  }

  removeCompleted () {
    this.todos = filters.active(this.todos)
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
