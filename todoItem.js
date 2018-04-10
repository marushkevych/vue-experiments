Vue.component('todo-item', {
  props: ['todo'],
  methods: {
    // One-directional data flow:
    toggle: function() {
      this.$emit('toggle', !this.todo.done)
    }
  },
  template: `
  <li>
    <input :id="todo.id" :checked="todo.done" type="checkbox" @click="toggle">
    <label :for="todo.id">{{ todo.text }}</label>
  </li>
  `
})
